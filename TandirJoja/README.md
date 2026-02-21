# Tandir Jo‘ja — Minimalist Web App

A premium, minimalist single-page website for ordering roasted chicken, coffee, and tea. Features a custom editorial design and Telegram integration.

## 🚀 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Setup**
    Create a `.env` file in the `server/` directory:
    ```env
    PORT=3000
    TELEGRAM_BOT_TOKEN=your_bot_token_here
    TELEGRAM_CHAT_ID=your_chat_id_here
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` in your browser.

## 🛠 Project Structure

- **public/**: Static frontend files (HTML, CSS, JS).
    - `index.html`: Main structure.
    - `css/style.css`: Minimalist design system.
    - `js/main.js`: Logic for cart, translations, and API.
- **server/**: Node.js Express backend.
    - `index.js`: API routes and Telegram logic.

## 🌍 Multilingual Support
Edit `public/js/main.js` -> `TRANSLATIONS` object to modify texts for UZ (Latin), UZ (Cyrillic), and RU.

## 📡 API Testing
You can text the order endpoint via cURL:

```bash
curl -X POST http://localhost:3000/api/order \
     -H "Content-Type: application/json" \
     -d '{
           "clientName": "Test User",
           "clientPhone": "+998901234567",
           "cartItems": [{"name": "Tandir Jo‘ja", "unitLabel": "pcs", "quantity": 2}],
           "totalSum": 0
         }'
```
