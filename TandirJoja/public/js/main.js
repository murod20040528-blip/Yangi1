// Data & Config
const TRANSLATIONS = {
    uz_latn: {
        nav_home: "Asosiy", nav_features: "Afzalliklar", nav_menu: "Menyu",
        cart: "Buyurtma",
        status_badge: "Tandir Jo‘ja • yangi va issiq",
        hero_title: "Haqiqiy mazza.<br>Minimal kutish.",
        hero_desc: "An'anaviy retsept, zamonaviy xizmat. Eng mazali tandir tovuq to'g'ridan-to'g'ri eshigingizga.",
        order_now: "Hozir buyurtma berish",
        feat_1_title: "Tandirda yopilgan", feat_1_desc: "Asl an'anaviy loy tandirda, xushbo'y tutun isiga boyigan holda tayyorlanadi.",
        feat_2_title: "Oliy Sifat", feat_2_desc: "Eng zo'r ta'm uchun har kuni faqat eng yangi mahsulotlarni tanlaymiz.",
        feat_3_title: "Tez yetkazish", feat_3_desc: "Issiq va yangi holatda uyingizgacha rekord vaqt ichida yetib boradi.",
        menu_title: "Bizning Menyu", menu_subtitle: "Bizning maxsus taomlar va tetiklantiruvchi ichimliklardan bahramand bo'ling.",
        cta_title: "Qorningiz ochdimi?", cta_desc: "Haqiqiy tandir mo'jizasini bugunoq tatib ko'ring.",
        footer_note: "An'analarni zamonaviy dasturxonga olib kelamiz.",
        drawer_title: "Sizning Savatingiz", drawer_subtitle: "Buyurtmani yakunlash",
        empty_cart: "Savatingiz bo'sh. Menyu orqali mahsulot qo'shing.",
        total_items: "Jami Mahsulotlar:",
        checkout_title: "Ma'lumotlar",
        label_name: "Ismingiz", label_phone: "Telefon raqam", label_address: "Yetkazish manzili", label_note: "Izoh (ixtiyoriy)",
        submit_order: "Buyurtmani Jo'natish",
        unit_label: "O'lchov", add_btn: "Qo'shish",
        success_msg: "Buyurtma qabul qilindi! Tez orada aloqaga chiqamiz.",
        error_msg: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
        products: {
            chicken: { name: "Tandir Jo‘ja", desc: "Maxsus sirli marinad va tillarang mukammal qizarish.", unit: "dona" },
            coffee: { name: "Qahva Arabika", desc: "Yangi qovurilgan va qaynatilgan xushbo'y arabika qahvasi.", unit: "finjon" },
            tea: { name: "O'zbek Choyi", desc: "An'anaviy ko'k yoki qora choy, limon va yalpiz bilan.", unit: "choynak" }
        }
    },
    uz_cyrl: {
        nav_home: "Асосий", nav_features: "Афзалликлар", nav_menu: "Меню",
        cart: "Буюртма",
        status_badge: "Тандир Жўжа • янги ва иссиқ",
        hero_title: "Ҳақиқий мазза.<br>Минимал кутиш.",
        hero_desc: "Анъанавий рецепт, замонавий хизмат. Энг мазали тандир товуқ тўғридан-тўғри эшигингизга.",
        order_now: "Ҳозир буюртма бериш",
        feat_1_title: "Тандирда ёпилган", feat_1_desc: "Асл анъанавий лой тандирда, хушбўй тутун исига бойиган ҳолда тайёрланади.",
        feat_2_title: "Олий Сифат", feat_2_desc: "Энг зўр таъм учун ҳар куни фақат энг янги маҳсулотларни танлаймиз.",
        feat_3_title: "Тез етказиш", feat_3_desc: "Иссиқ ва янги ҳолатда уйингизгача рекорд вақт ичида етиб боради.",
        menu_title: "Бизнинг Меню", menu_subtitle: "Бизнинг махсус таомлар ва тетиклантирувчи ичимликлардан баҳраманд бўлинг.",
        cta_title: "Қорнингиз очдими?", cta_desc: "Ҳақиқий тандир мўжизасини бугуноқ татиб кўринг.",
        footer_note: "Анъаналарни замонавий дастурхонга олиб келамиз.",
        drawer_title: "Сизнинг Саватингиз", drawer_subtitle: "Буюртмани якунлаш",
        empty_cart: "Саватингиз бўш. Меню орқали маҳсулот қўшинг.",
        total_items: "Жами Маҳсулотлар:",
        checkout_title: "Маълумотлар",
        label_name: "Исмингиз", label_phone: "Телефон рақам", label_address: "Етказиш манзили", label_note: "Изоҳ (ихтиёрий)",
        submit_order: "Буюртмани Жўнатиш",
        unit_label: "Ўлчов", add_btn: "Қўшиш",
        success_msg: "Буюртма қабул қилинди! Тез орада алоқага чиқамиз.",
        error_msg: "Хатолик юз берди. Илтимос қайта уриниб кўринг.",
        products: {
            chicken: { name: "Тандир Жўжа", desc: "Махсус сирли маринад ва тилларанг мукаммал қизариш.", unit: "дона" },
            coffee: { name: "Қаҳва Арабика", desc: "Янги қовурилган ва қайнатилган хушбўй арабика қаҳваси.", unit: "финжон" },
            tea: { name: "Ўзбек Чойи", desc: "Анъанавий кўк ёки қора чой, лимон ва ялпиз билан.", unit: "чойнак" }
        }
    },
    ru: {
        nav_home: "Главная", nav_features: "Преимущества", nav_menu: "Меню",
        cart: "Заказ",
        status_badge: "Тандыр Жожа • свежо и горячо",
        hero_title: "Истинный вкус.<br>Минимум ожидания.",
        hero_desc: "Традиционный рецепт, современный сервис. Лучшая курица из тандыра с доставкой до двери.",
        order_now: "Заказать сейчас",
        feat_1_title: "Из Тандыра", feat_1_desc: "Готовится в традиционной глиняной печи для идеального аромата.",
        feat_2_title: "Премиум Качество", feat_2_desc: "Мы отбираем только самые свежие ингредиенты для лучшего вкуса.",
        feat_3_title: "Быстрая доставка", feat_3_desc: "Горячим и свежим прямо на ваш стол в рекордно короткие сроки.",
        menu_title: "Наше Меню", menu_subtitle: "Откройте для себя наши фирменные блюда и напитки.",
        cta_title: "Уже проголодались?", cta_desc: "Ощутите магию настоящего тандыра уже сегодня.",
        footer_note: "Приносим традиции на современный стол.",
        drawer_title: "Ваша Корзина", drawer_subtitle: "Оформление заказа",
        empty_cart: "Ваша корзина пуста. Добавьте товары из меню.",
        total_items: "Всего товаров:",
        checkout_title: "Детали",
        label_name: "Ваше Имя", label_phone: "Номер телефона", label_address: "Адрес доставки", label_note: "Примечание (необязательно)",
        submit_order: "ОТПРАВИТЬ ЗАКАЗ",
        unit_label: "Единица", add_btn: "Добавить",
        success_msg: "Заказ принят! Скоро свяжемся с вами.",
        error_msg: "Произошла ошибка. Попробуйте еще раз.",
        products: {
            chicken: { name: "Тандыр Курица", desc: "Особый секретный маринад и идеальная золотистая корочка.", unit: "шт" },
            coffee: { name: "Кофе Арабика", desc: "Свежеобжаренная и заваренная ароматная арабика.", unit: "чашка" },
            tea: { name: "Узбекский Чай", desc: "Традиционный зеленый или черный чай с лимоном и мятой.", unit: "чайник" }
        }
    }
};

const PRODUCTS_DATA = [
    {
        id: 'p1',
        key: 'chicken',
        image: 'images/chicken.png',
        defaultUnit: 'pcs',
        step: 1,
        min: 1
    },
    {
        id: 'p2',
        key: 'coffee',
        image: 'images/coffee.png',
        defaultUnit: 'unit',
        step: 1,
        min: 1
    },
    {
        id: 'p3',
        key: 'tea',
        image: 'images/tea.png',
        defaultUnit: 'unit',
        step: 1,
        min: 1
    }
];

let state = {
    lang: localStorage.getItem('tj_lang') || 'uz_latn',
    cart: []
};

// DOM Elements
const els = {
    body: document.body,
    header: document.querySelector('.header'),
    langBtns: document.querySelectorAll('.lang-switcher span'),
    textElements: document.querySelectorAll('[data-i18n]'),
    productsGrid: document.getElementById('productsGrid'),
    cartBtn: document.getElementById('cartBtn'),
    heroOrderBtn: document.getElementById('heroOrderBtn'),
    cartCount: document.getElementById('cartCount'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    drawer: document.getElementById('orderDrawer'),
    closeDrawer: document.getElementById('closeDrawer'),
    cartItemsList: document.getElementById('cartItemsList'),
    checkoutForm: document.getElementById('checkoutForm'),
    formFeedback: document.getElementById('formFeedback'),
    cartTotalContainer: document.getElementById('cartTotalContainer'),
    cartTotalItems: document.getElementById('cartTotalItems')
};

// Init
function init() {
    setupLanguage();
    renderProducts();
    updateTexts();
    setupEvents();
    setupScrollAnimations();
    checkScroll();
}

// Language Logic
function setupLanguage() {
    els.langBtns.forEach(btn => {
        if (btn.dataset.lang === state.lang) btn.classList.add('active');
        btn.addEventListener('click', () => {
            state.lang = btn.dataset.lang;
            localStorage.setItem('tj_lang', state.lang);
            els.langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTexts();
            renderProducts();
            renderCart();
        });
    });
}

function updateTexts() {
    const t = TRANSLATIONS[state.lang];
    els.textElements.forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (key.includes('title') || key.includes('desc')) el.innerHTML = t[key];
            else el.textContent = t[key];
        }
    });
}

// Product Rendering
function renderProducts() {
    els.productsGrid.innerHTML = '';
    const t = TRANSLATIONS[state.lang];

    PRODUCTS_DATA.forEach(p => {
        const pInfo = t.products[p.key];
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.image}" alt="${pInfo.name}" class="product-img">
            </div>
            <div class="product-content">
                <h3 class="product-name">${pInfo.name}</h3>
                <p class="product-desc">${pInfo.desc}</p>
                <div class="product-controls">
                    <span class="unit-label">${t.unit_label}: ${pInfo.unit}</span>
                    <div class="input-row">
                        <input type="number" 
                            class="qty-input" 
                            id="qty-${p.id}" 
                            value="${p.min}" 
                            min="${p.min}" 
                            step="${p.step}"
                        >
                        <button class="add-btn" onclick="addToCart('${p.id}')">
                            <i class="ph ph-plus"></i> ${t.add_btn}
                        </button>
                    </div>
                </div>
            </div>
        `;
        els.productsGrid.appendChild(card);
    });
}

// Cart Logic
window.addToCart = (pid) => {
    const pData = PRODUCTS_DATA.find(p => p.id === pid);
    const input = document.getElementById(`qty-${pid}`);
    const qty = parseFloat(input.value);

    if (qty <= 0) return;

    const existing = state.cart.find(item => item.id === pid);
    if (existing) {
        existing.quantity += qty;
    } else {
        state.cart.push({
            id: pid,
            key: pData.key,
            quantity: qty,
            unitType: pData.defaultUnit
        });
    }

    // Animate cart badge
    els.cartCount.style.transform = "scale(1.5)";
    setTimeout(() => els.cartCount.style.transform = "scale(1)", 200);

    updateCartUI();
    openDrawer();
};

window.removeFromCart = function (pid) {
    state.cart = state.cart.filter(item => item.id !== pid);
    updateCartUI();
}

function updateCartUI() {
    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    els.cartCount.textContent = totalQty;
    els.cartTotalItems.textContent = totalQty;

    if (state.cart.length > 0) {
        els.cartTotalContainer.style.display = 'flex';
    } else {
        els.cartTotalContainer.style.display = 'none';
    }

    renderCart();
}

function renderCart() {
    const t = TRANSLATIONS[state.lang];
    if (state.cart.length === 0) {
        els.cartItemsList.innerHTML = `
            <div class="empty-cart-msg">
                <i class="ph ph-shopping-bag empty-icon"></i>
                <p>${t.empty_cart}</p>
            </div>`;
        return;
    }

    els.cartItemsList.innerHTML = state.cart.map(item => {
        const pName = t.products[item.key].name;
        const pUnitLabel = t.products[item.key].unit;

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${pName}</h5>
                    <span>${item.quantity} x ${pUnitLabel}</span>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">
                    <i class="ph ph-trash"></i>
                </button>
            </div>
        `;
    }).join('');
}

// Drawer Events
function openDrawer() {
    els.drawer.classList.add('open');
    els.drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}
function closeDrawer() {
    els.drawer.classList.remove('open');
    els.drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function setupEvents() {
    els.cartBtn.addEventListener('click', openDrawer);
    els.closeDrawer.addEventListener('click', closeDrawer);
    els.drawerOverlay.addEventListener('click', closeDrawer);

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    els.heroOrderBtn.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    els.checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const t = TRANSLATIONS[state.lang];

        if (state.cart.length === 0) {
            alert(t.empty_cart);
            return;
        }

        const btn = els.checkoutForm.querySelector('.submit-btn');
        const spinner = btn.querySelector('.spinner');
        const icon = btn.querySelector('i');
        const textSpan = btn.querySelector('.btn-text');

        const originalText = textSpan.innerHTML;
        btn.disabled = true;

        textSpan.innerHTML = 'Yuklanmoqda...';
        icon.style.display = 'none';
        spinner.style.display = 'block';

        const formData = {
            clientName: document.getElementById('cName').value,
            clientPhone: document.getElementById('cPhone').value,
            clientAddress: document.getElementById('cAddress').value,
            clientNote: document.getElementById('cNote').value,
            cartItems: state.cart.map(item => ({
                name: t.products[item.key].name,
                unitLabel: t.products[item.key].unit,
                quantity: item.quantity
            })),
            _honey: els.checkoutForm.querySelector('[name="_honey"]').value
        };

        try {
            const res = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success) {
                els.formFeedback.innerHTML = `<div style="color:#2ecc71;margin-top:15px;text-align:center;font-weight:500;">${t.success_msg}</div>`;
                state.cart = [];
                updateCartUI();
                els.checkoutForm.reset();
                setTimeout(() => {
                    closeDrawer();
                    els.formFeedback.innerHTML = '';
                    btn.disabled = false;
                    textSpan.innerHTML = originalText;
                    icon.style.display = 'block';
                    spinner.style.display = 'none';
                }, 3000);
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            console.error(err);
            els.formFeedback.innerHTML = `<div style="color:#e74c3c;margin-top:15px;text-align:center;font-weight:500;">${t.error_msg}</div>`;
            btn.disabled = false;
            textSpan.innerHTML = originalText;
            icon.style.display = 'block';
            spinner.style.display = 'none';
        }
    });
}

// Scroll Handling & Animations
function checkScroll() {
    if (window.scrollY > 50) {
        els.header.classList.add('scrolled');
    } else {
        els.header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', checkScroll);

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once animated
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function setupScrollAnimations() {
    document.querySelectorAll('.reveal-up').forEach(el => scrollObserver.observe(el));
}

// Specific spinner CSS injection for the button since it wasn't in CSS initially
const style = document.createElement('style');
style.textContent = `
    .spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0,0,0,0.2);
        border-top-color: #000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    @keyframes spin { 100% { transform: rotate(360deg); } }
`;
document.head.appendChild(style);

// Run
document.addEventListener('DOMContentLoaded', init);
