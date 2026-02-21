const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
// Dynamic import for node-fetch is strictly required in recent versions if we were using modules, 
// but for standard CJS scripts, we can often rely on built-in fetch in Node 18+ or stick to 'axios'/'node-fetch' v2.
// To keep it simple and compatible, we'll use a widely compatible approach.
// However, since we installed 'node-fetch', let's check version.
// If node version is recent (18+), global fetch is available. I'll use global fetch safely.

const app = express();
const PORT = process.env.PORT || 3000;

// Security: Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { success: false, message: 'Too many requests, please try again later.' }
});

app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files for simple dev

// Honeypot middleware
const checkHoneypot = (req, res, next) => {
    if (req.body._honey && req.body._honey.length > 0) {
        console.warn(`[Spam Detected] Honeypot triggered by IP: ${req.ip}`);
        return res.status(200).json({ success: true, message: 'Order received' }); // Fake success for bots
    }
    next();
};

app.post('/api/order', checkHoneypot, async (req, res) => {
    try {
        const { clientName, clientPhone, clientAddress, clientNote, cartItems, totalSum } = req.body;

        // Basic Validation
        if (!clientName || !clientPhone || !cartItems || cartItems.length === 0) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        // Format Message for Telegram
        const currentDate = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

        let messageText = `🧾 <b>New Order — Tandir Jo‘ja</b>\n\n`;
        messageText += `👤 <b>Customer:</b> ${clientName}\n`;
        messageText += `📞 <b>Phone:</b> ${clientPhone}\n`;
        if (clientAddress) messageText += `📍 <b>Address:</b> ${clientAddress}\n`;
        messageText += `\n🛒 <b>Items:</b>\n`;

        cartItems.forEach(item => {
            messageText += `- ${item.name} (${item.unitLabel}): <b>${item.quantity}</b>\n`;
        });

        if (clientNote) messageText += `\n📝 <b>Note:</b> ${clientNote}\n`;
        messageText += `\n📅 <b>Time:</b> ${currentDate}`;

        // Send to Telegram
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('[Configuration Error] Missing Telegram env vars');
            // If dev environment lacks creds, we simulate success
            return res.json({ success: true, message: 'Order simulated (Server config missing)' });
        }

        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: messageText,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();

        if (data.ok) {
            return res.json({ success: true });
        } else {
            console.error('Telegram API Error:', data);
            return res.status(502).json({ success: false, message: 'Failed to send to Telegram' });
        }

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`Serving static files from ../public`);
    });
}

module.exports = app;
