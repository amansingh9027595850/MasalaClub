// Masala Club - Interactive Multi-Page Application Script

// --- Application State ---
const state = {
    cafeMenu: [
        {
            id: 'cafe_1',
            name: 'Spiced Masala Chai',
            price: 75,
            description: 'Rich black tea brewed with fresh mountain milk, organic ginger, green cardamom, cinnamon, and wild honey.',
            category: 'breakfast',
            rating: '4.9',
            customizable: true,
            image: 'assets/masala_chai.png',
            imageClass: 'chai-style',
            defaultOptions: { temp: 'Hot', milk: 'Whole Milk', sweet: 'Medium' }
        },
        {
            id: 'cafe_2',
            name: 'Buransh Rhododendron Cooler',
            price: 110,
            description: 'A refreshing iced herbal drink crafted from hand-pressed crimson rhododendron petals sourced from Chamoli forests.',
            category: 'desserts',
            rating: '4.8',
            customizable: false,
            image: 'assets/rhododendron_cooler.png',
            imageClass: 'cooler-style'
        },
        {
            id: 'cafe_3',
            name: 'Nanda Devi Cappuccino',
            price: 130,
            description: 'Double shot espresso topped with creamy frothed milk, lightly dusted with organic Himalayan cardamom cocoa.',
            category: 'breakfast',
            rating: '4.7',
            customizable: true,
            image: 'assets/cappuccino.png',
            imageClass: 'coffee-style',
            defaultOptions: { temp: 'Hot', milk: 'Whole Milk', sweet: 'Medium' }
        },
        {
            id: 'cafe_4',
            name: 'Ginger Lemon Honey Brew',
            price: 90,
            description: 'Fresh root ginger, valley lemons, and wild mountain forest honey steeped in pure hot spring water.',
            category: 'breakfast',
            rating: '4.9',
            customizable: true,
            image: 'assets/ginger_lemon_tea.png',
            imageClass: 'ginger-style',
            defaultOptions: { temp: 'Hot', milk: 'No Milk', sweet: 'High' }
        },
        {
            id: 'cafe_5',
            name: 'Traditional Butter Tea (Suja)',
            price: 95,
            description: 'Authentic Himalayan salty tea churned with fresh yak butter, local tea leaves, and a pinch of salt.',
            category: 'breakfast',
            rating: '4.6',
            customizable: false,
            image: 'assets/butter_tea.png',
            imageClass: 'suja-style'
        },
        {
            id: 'cafe_6',
            name: 'Spiced Apple Walnut Tart',
            price: 120,
            description: 'Flaky baked pastry filled with sweet local caramelized apples, toasted wild valley walnuts, and cinnamon.',
            category: 'desserts',
            rating: '4.8',
            customizable: false,
            image: 'assets/apple_tart.png',
            imageClass: 'tart-style'
        },
        {
            id: 'cafe_7',
            name: 'Himalayan Herb Cheese Toast',
            price: 140,
            description: 'Toasted artisanal wheat bread topped with melted local cheese, seasoned with wild mountain oregano and thyme.',
            category: 'breakfast',
            rating: '4.7',
            customizable: false,
            image: 'assets/cheese_toast.png',
            imageClass: 'toast-style'
        },
        {
            id: 'cafe_8',
            name: 'Cardamom Hot Chocolate',
            price: 150,
            description: 'Cozy dark hot chocolate infused with freshly ground mountain green cardamom, topped with homemade cream.',
            category: 'desserts',
            rating: '4.9',
            customizable: true,
            image: 'assets/hot_chocolate.png',
            imageClass: 'cocoa-style',
            defaultOptions: { temp: 'Hot', milk: 'Whole Milk', sweet: 'Medium' }
        },
        {
            id: 'cafe_9',
            name: 'Himalayan Millet Crepes',
            price: 180,
            description: 'Healthy crepes prepared from finger millet flour, stuffed with cottage cheese and fresh mountain spinach.',
            category: 'lunch',
            rating: '4.7',
            customizable: false,
            image: 'assets/millet_crepes.png',
            imageClass: 'crepe-style'
        },
        {
            id: 'cafe_10',
            name: 'Mountain Gahat Dal Bowl',
            price: 220,
            description: 'Traditional iron-pot black lentil stew rich in nutrients, served with local red terraced rice and ghee.',
            category: 'lunch',
            rating: '4.9',
            customizable: false,
            image: 'assets/gahat_dal.png',
            imageClass: 'dal-style'
        },
        {
            id: 'cafe_11',
            name: 'Pahadi Paneer Tikka',
            price: 260,
            description: 'Charred paneer cubes marinated in high-altitude wild mint, mustard oil, and mountain spices.',
            category: 'dinner',
            rating: '4.8',
            customizable: false,
            image: 'assets/paneer_tikka.png',
            imageClass: 'paneer-style'
        },
        {
            id: 'cafe_12',
            name: 'Barley Mushroom Broth',
            price: 190,
            description: 'Hearty winter broth slow-cooked with pearled barley and sun-dried wild oak forest mushrooms.',
            category: 'dinner',
            rating: '4.7',
            customizable: false,
            image: 'assets/mushroom_broth.png',
            imageClass: 'broth-style'
        },
        {
            id: 'cafe_13',
            name: 'Saffron Buransh Kheer',
            price: 140,
            description: 'Slow-cooked Himalayan red rice pudding flavored with saffron, cardamoms, and sweet Buransh syrup.',
            category: 'desserts',
            rating: '4.9',
            customizable: false,
            image: 'assets/buransh_kheer.png',
            imageClass: 'kheer-style'
        },
        {
            id: 'cafe_14',
            name: 'Desi Ghee Chole Bhature',
            price: 125,
            description: 'Fluffy puffed fried breads served with spicy, aromatic chickpeas cooked in pure Desi Ghee.',
            category: 'lunch',
            rating: '4.8',
            customizable: false,
            image: 'assets/chole_bhature.png',
            imageClass: 'bhature-style'
        },
        {
            id: 'cafe_15',
            name: 'Desi Ghee Aalu Tikki Chaat',
            price: 70,
            description: 'Crispy potato patties fried in Desi Ghee, topped with sweet yogurt, mint chutney, tamarind chutney, and spices.',
            category: 'lunch',
            rating: '4.7',
            customizable: false,
            image: 'assets/aaloo_tikki.png',
            imageClass: 'tikki-style'
        },
        {
            id: 'cafe_16',
            name: 'Rabdi Jalebi Mountain Duo',
            price: 199,
            description: 'Crisp golden jalebis freshly fried, served with rich, creamy reduced milk Rabdi.',
            category: 'desserts',
            rating: '4.9',
            customizable: false,
            image: 'assets/rabdi_jalebi.jpg',
            imageClass: 'jalebi-style'
        },
        {
            id: 'cafe_17',
            name: 'Kulhad Masala Tea',
            price: 25,
            description: 'Himalayan tea leaves brewed with ginger and cardamom, served in a traditional clay Kulhad cup.',
            category: 'breakfast',
            rating: '4.9',
            customizable: false,
            image: 'assets/kulhad_tea.jpg',
            imageClass: 'kulhad-style'
        },
        {
            id: 'cafe_18',
            name: 'Aaloo Paratha Platter',
            price: 130,
            description: 'Griddled whole wheat flatbreads stuffed with spiced mashed potatoes, served with fresh butter and yogurt.',
            category: 'breakfast',
            rating: '4.8',
            customizable: false,
            image: 'assets/aaloo_paratha.jpg',
            imageClass: 'paratha-style'
        }
    ],

    groceryProducts: [
        {
            id: 'groc_1',
            name: 'Chamoli Wild Forest Honey',
            price: 450,
            weight: '500g',
            description: '100% raw, unpasteurized honey gathered by local tribes in high altitude coniferous forests.',
            category: 'honey',
            rating: '5.0',
            image: 'assets/wild_honey.jpg',
            imageClass: 'honey-img'
        },
        {
            id: 'groc_2',
            name: 'Organic Green Cardamom Pods',
            price: 180,
            weight: '100g',
            description: 'Highly aromatic, plump cardamom pods handpicked from terraced farms in lower Chamoli.',
            category: 'spices',
            rating: '4.9',
            image: 'assets/cardamom_pods.jpg',
            imageClass: 'spices-img'
        },
        {
            id: 'groc_3',
            name: 'Himalayan Pink Bed Salt',
            price: 80,
            weight: '500g',
            description: 'Fine, mineral-rich rock salt extracted from ancient natural beds in the Himalayan foothills.',
            category: 'spices',
            rating: '4.7',
            image: 'assets/pink_salt.jpg',
            imageClass: 'salt-img'
        },
        {
            id: 'groc_4',
            name: 'Nanda Devi Golden Needle Tea',
            price: 350,
            weight: '100g',
            description: 'Extremely rare, high-altitude black tea buds with delicate golden tips and a natural sweet finish.',
            category: 'tea',
            rating: '4.9',
            image: 'assets/golden_needle_tea.jpg',
            imageClass: 'tea-img'
        },
        {
            id: 'groc_5',
            name: 'Red Terraced Himalayan Rice',
            price: 240,
            weight: '1kg',
            description: 'Nutritious, unpolished traditional red grain rice grown in glacial river-fed mountain terraces.',
            category: 'grains',
            rating: '4.8',
            image: 'assets/red_rice.jpg',
            imageClass: 'rice-img'
        },
        {
            id: 'groc_6',
            name: 'Stoneground Mandua (Millet) Flour',
            price: 120,
            weight: '1kg',
            description: 'Rich in calcium finger millet flour, stoneground using traditional water-powered mills (ghatt).',
            category: 'grains',
            rating: '4.8',
            image: 'assets/mandua_flour.jpg',
            imageClass: 'millet-img'
        },
        {
            id: 'groc_7',
            name: 'Wild Mountain Ridge Oregano',
            price: 95,
            weight: '50g',
            description: 'Aromatic, sun-dried wild oregano leaves hand-gathered along the high ridges of Gopeshwar.',
            category: 'spices',
            rating: '4.6',
            image: 'assets/mountain_oregano.jpg',
            imageClass: 'oregano-img'
        },
        {
            id: 'groc_8',
            name: 'Chamoli Ridge Blend Tea',
            price: 160,
            weight: '250g',
            description: 'Our house black tea blend mixed with dried dry ginger, green cardamom, cinnamon, and bay leaves.',
            category: 'tea',
            rating: '4.9',
            image: 'assets/ridge_blend_tea.jpg',
            imageClass: 'blend-img'
        },
        {
            id: 'groc_9',
            name: 'Himalayan Dal Moth Namkeen',
            price: 140,
            weight: '400g',
            description: 'Savory moth lentil and nut mix prepared with traditional mountain spices.',
            category: 'grains',
            rating: '4.8',
            image: 'assets/dal_moth.jpg',
            imageClass: 'dalmoth-img'
        },
        {
            id: 'groc_10',
            name: 'Desi Ghee Kaju Mathri',
            price: 240,
            weight: '500g',
            description: 'Crispy, flaky wheat flour crackers prepared with pure Desi Ghee and cashews.',
            category: 'grains',
            rating: '4.7',
            image: 'assets/kaju_mathri.JPG',
            imageClass: 'mathri-img'
        },
        {
            id: 'groc_11',
            name: 'Himalayan Dry Fruit Ladoo',
            price: 450,
            weight: '400g',
            description: 'Nutritious sweet energy balls naturally sweetened with wild forest honey and dried fruits.',
            category: 'honey',
            rating: '4.9',
            image: 'assets/dry_fruit_ladoo.jpg',
            imageClass: 'dryfruit-img'
        },
        {
            id: 'groc_12',
            name: 'Sun-dried Aam Papad Rolls',
            price: 90,
            weight: '200g',
            description: 'Spiced and sweet sun-dried mango pulp sheets rolled into thin layers.',
            category: 'spices',
            rating: '4.8',
            image: 'assets/aam_papad.jpg',
            imageClass: 'aampapad-img'
        },
        {
            id: 'groc_13',
            name: 'High-Altitude Free-Range Eggs',
            price: 90,
            weight: '6 pcs',
            description: 'Farm-fresh, nutrient-rich eggs from free-roaming mountain hens fed on natural organic grains.',
            category: 'dairy',
            rating: '4.8',
            image: 'assets/eggs.png',
            imageClass: 'eggs-img'
        },
        {
            id: 'groc_14',
            name: 'Premium Basmati Rice',
            price: 180,
            weight: '1kg',
            description: 'Fragrant, long-grain Basmati rice sourced from the fertile valleys of Dehradun, aged to perfection.',
            category: 'grains',
            rating: '4.9',
            image: 'assets/basmati_rice.png',
            imageClass: 'basmati-img'
        },
        {
            id: 'groc_15',
            name: 'Artisanal Multigrain Sourdough Bread',
            price: 95,
            weight: '400g',
            description: 'Freshly baked sourdough prepared with stoneground local grains, wild yeast culture, and pure spring water.',
            category: 'bakery',
            rating: '4.7',
            image: 'assets/bread.png',
            imageClass: 'bread-img'
        },
        {
            id: 'groc_16',
            name: 'Organic Mountain Demerara Sugar',
            price: 85,
            weight: '1kg',
            description: 'Unrefined brown sugar crystals with natural molasses, organically grown in Uttarakhand\'s sugarcane valleys.',
            category: 'grains',
            rating: '4.8',
            image: 'assets/organic_sugar.png',
            imageClass: 'sugar-img'
        },
        {
            id: 'groc_17',
            name: 'Cold-Pressed Pahadi Mustard Oil',
            price: 210,
            weight: '1L',
            description: 'Traditional wood-pressed (Kani) mustard oil, pure and aromatic, rich in natural nutrients.',
            category: 'grains',
            rating: '4.9',
            image: 'assets/mustard_oil.png',
            imageClass: 'oil-img'
        },
        {
            id: 'groc_18',
            name: 'Organic Mountain Cow Butter',
            price: 140,
            weight: '200g',
            description: 'Churned from the fresh milk of pasture-fed Himalayan cows, lightly salted and rich in flavor.',
            category: 'dairy',
            rating: '4.8',
            image: 'assets/butter.png',
            imageClass: 'butter-img'
        },
        {
            id: 'groc_19',
            name: 'Artisanal Pahadi Gouda Cheese',
            price: 320,
            weight: '250g',
            description: 'Semi-hard cheese aged for 3 months, crafted using traditional techniques and fresh mountain cow milk.',
            category: 'dairy',
            rating: '4.9',
            image: 'assets/cheese.png',
            imageClass: 'cheese-img'
        },
        {
            id: 'groc_20',
            name: 'Thick Mountain Greek Yogurt',
            price: 75,
            weight: '400g',
            description: 'Creamy, strained probiotic yogurt made with fresh whole milk from local high-altitude dairies.',
            category: 'dairy',
            rating: '4.7',
            image: 'assets/greek_yogurt.png',
            imageClass: 'yogurt-img'
        },
        {
            id: 'groc_21',
            name: 'Himalayan Arabica Coffee Beans',
            price: 380,
            weight: '250g',
            description: 'Single-origin Arabica coffee beans, medium-roasted, showcasing notes of chocolate and mountain berries.',
            category: 'tea',
            rating: '4.9',
            image: 'assets/coffee.png',
            imageClass: 'coffee-img'
        },
        {
            id: 'groc_22',
            name: 'Himalayan Multigrain Muesli',
            price: 240,
            weight: '400g',
            description: 'A crunchy mix of toasted local millets, rolled oats, dried buransh flower petals, and wild almonds.',
            category: 'grains',
            rating: '4.8',
            image: 'assets/millet_muesli.png',
            imageClass: 'muesli-img'
        },
        {
            id: 'groc_23',
            name: 'Organic Whole Wheat Penne Pasta',
            price: 110,
            weight: '500g',
            description: 'Artisanal stoneground whole wheat pasta, slow-dried to preserve nutrients and perfect texture.',
            category: 'grains',
            rating: '4.6',
            image: 'assets/whole_wheat_pasta.png',
            imageClass: 'pasta-img'
        },
        {
            id: 'groc_24',
            name: 'Desi Ghee Cardamom Cookies',
            price: 120,
            weight: '250g',
            description: 'Crispy cookies baked with organic green cardamom, local wheat flour, and pure Desi ghee.',
            category: 'bakery',
            rating: '4.9',
            image: 'assets/cardamom_cookies.png',
            imageClass: 'cookies-img'
        },
        {
            id: 'groc_25',
            name: 'Wild Lavender & Himalayan Salt Soap',
            price: 95,
            weight: '100g',
            description: 'Handmade organic cold-process soap infused with wild lavender essential oil and mineral-rich pink salt.',
            category: 'essentials',
            rating: '4.8',
            image: 'assets/lavender_soap.png',
            imageClass: 'soap-img'
        },
        {
            id: 'groc_26',
            name: 'Herbal Dant Manjan Toothpaste',
            price: 80,
            weight: '150g',
            description: 'All-natural toothpaste formulated with wild mint, clove oil, neem, and Himalayan salt for complete oral care.',
            category: 'essentials',
            rating: '4.7',
            image: 'assets/herbal_toothpaste.png',
            imageClass: 'toothpaste-img'
        },
        {
            id: 'groc_27',
            name: 'Fresh High-Altitude A2 Cow Milk',
            price: 65,
            weight: '1L',
            description: 'Pure, fresh A2 milk pasteurized and sourced daily from local mountain cow farms in Gopeshwar.',
            category: 'dairy',
            rating: '4.9',
            image: 'assets/milk.png',
            imageClass: 'milk-img'
        },
        {
            id: 'groc_28',
            name: 'Sparkling Himalayan Buransh Brew',
            price: 95,
            weight: '330ml',
            description: 'Effervescent mountain spring water infused with sweet crimson rhododendron (Buransh) nectar and mint.',
            category: 'tea',
            rating: '4.8',
            image: 'assets/buransh_brew.png',
            imageClass: 'drink-img'
        },
        {
            id: 'groc_29',
            name: 'Organic Sweet Corn',
            price: 60,
            weight: '500g',
            description: 'Sweet, juicy yellow corn kernels, hand-harvested from high-altitude fields of Chamoli.',
            category: 'grains',
            rating: '4.7',
            image: 'assets/sweet_corn.png',
            imageClass: 'corn-img'
        },
        {
            id: 'groc_30',
            name: 'Active Dry Mountain Yeast',
            price: 45,
            weight: '100g',
            description: 'Premium active dry yeast, perfect for baking local rustic breads and sourdoughs.',
            category: 'bakery',
            rating: '4.6',
            image: 'assets/dry_yeast.jpg',
            imageClass: 'yeast-img'
        },
        {
            id: 'groc_31',
            name: 'Cardamom Dark Mountain Chocolate',
            price: 150,
            weight: '80g',
            description: 'Rich 70% dark chocolate handcrafted with cocoa and aromatic green cardamom pods.',
            category: 'bakery',
            rating: '4.9',
            image: 'assets/dark_chocolate.jpg',
            imageClass: 'chocolate-img'
        },
        {
            id: 'groc_32',
            name: 'Crispy Himalayan Potato Chips',
            price: 50,
            weight: '150g',
            description: 'Thinly sliced mountain potatoes fried in pure mustard oil and seasoned with pink salt.',
            category: 'bakery',
            rating: '4.7',
            image: 'assets/potato_chips.jpg',
            imageClass: 'chips-img'
        },
        {
            id: 'groc_33',
            name: 'Dried Buransh Petals',
            price: 180,
            weight: '100g',
            description: 'Hand-picked, sun-dried crimson rhododendron (Buransh) petals from the high forests of Chamoli, ideal for making traditional teas, squashes, and infusions.',
            category: 'spices',
            rating: '4.9',
            image: 'assets/buransh_flowers.png',
            imageClass: 'buransh-img'
        },
        {
            id: 'groc_34',
            name: 'Himalayan Shivakton Juice',
            price: 260,
            weight: '500ml',
            description: '100% pure, nutrient-dense Sea Buckthorn berry juice, packed with vitamins and essential Omega fatty acids directly from high-altitude slopes.',
            category: 'essentials',
            rating: '4.8',
            image: 'assets/seabuckthorn.png',
            imageClass: 'seabuckthorn-img'
        },
        {
            id: 'groc_35',
            name: 'Organic Tulshi Leaves',
            price: 90,
            weight: '50g',
            description: 'Aromatic, sun-dried holy basil (Tulsi) leaves hand-picked from organic home gardens in Chamoli valleys, ideal for soothing infusions.',
            category: 'spices',
            rating: '4.8',
            image: 'assets/tulsi.png',
            imageClass: 'tulsi-img'
        }
    ],

    currentCustomizingItem: null,
    cart: []
};

// Initialize Cart from storage
try {
    const savedCart = localStorage.getItem('masala_club_cart');
    if (savedCart) {
        state.cart = JSON.parse(savedCart);
    }
} catch (e) {
    console.error("Failed to load cart", e);
    state.cart = [];
}

// --- DOM elements cache (Resolved Safely) ---
const getDomElements = () => ({
    header: document.getElementById('main-header'),
    cafeGrid: document.getElementById('cafe-menu-grid'),
    groceryGrid: document.getElementById('grocery-items-grid'),
    galleryGrid: document.getElementById('gallery-items-grid'),
    grocerySearch: document.getElementById('grocery-search'),
    groceryCategory: document.getElementById('grocery-cat-select'),
    successModal: document.getElementById('success-message-modal'),
    successTitle: document.getElementById('success-modal-title'),
    successMessage: document.getElementById('success-modal-message'),
    customizeModal: document.getElementById('customize-item-modal'),
    customizeTitle: document.getElementById('cust-item-name'),
    customizePrice: document.getElementById('cust-item-price'),
    customizeTemp: document.getElementById('cust-temp-options'),
    customizeMilk: document.getElementById('cust-milk-options'),
    customizeSweet: document.getElementById('cust-sweet-options'),
    navLinks: document.getElementById('nav-links-menu'),
    mobileMenuBtn: document.getElementById('menu-mobile-btn')
});

let dom = {};

// --- Application Init ---
document.addEventListener('DOMContentLoaded', () => {
    dom = getDomElements();

    // Scroll event for Header
    window.addEventListener('scroll', () => {
        if (!dom.header) return;
        if (window.scrollY > 50) {
            dom.header.classList.add('scrolled');
        } else {
            dom.header.classList.remove('scrolled');
        }
    });



    // Populate page-specific data grids safely
    if (dom.cafeGrid) renderCafeMenu(state.cafeMenu);
    if (dom.groceryGrid) renderGroceryStore(state.groceryProducts);
    if (dom.galleryGrid) {
        renderGalleryItems();
        // Setup click listener outside lightbox content to close it
        const lightboxModal = document.getElementById('gallery-lightbox-modal');
        if (lightboxModal) {
            lightboxModal.addEventListener('click', (e) => {
                if (e.target === lightboxModal) {
                    closeLightbox();
                }
            });
        }
    }

    // Initialize static gallery items if present (e.g. on index.html)
    const staticGalleryItems = document.querySelectorAll('.gallery-item');
    if (staticGalleryItems.length > 0 && !dom.galleryGrid) {
        const products = [];
        staticGalleryItems.forEach((item, index) => {
            const imgEl = item.querySelector('.card-img');
            const titleEl = item.querySelector('.gallery-hover-title');
            const catEl = item.querySelector('.gallery-hover-category');
            const descEl = item.querySelector('.gallery-desc-hidden');
            
            products.push({
                id: 'static_' + index,
                name: titleEl ? titleEl.textContent : (imgEl ? imgEl.alt : ''),
                description: descEl ? descEl.textContent : (imgEl ? imgEl.alt : ''),
                image: imgEl ? imgEl.getAttribute('src') : '',
                category: item.getAttribute('data-category') || 'all',
                tagText: catEl ? catEl.textContent : 'Gallery'
            });

            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });
        state.galleryItems = products;
        
        const lightboxModal = document.getElementById('gallery-lightbox-modal');
        if (lightboxModal) {
            lightboxModal.addEventListener('click', (e) => {
                if (e.target === lightboxModal) {
                    closeLightbox();
                }
            });
        }
    }

    // Highlight active navbar links
    highlightActiveNavLink();

    // Initialize FAQ Accordion
    initFaqAccordion();

    // Initialize Testimonial Slider
    initTestimonialsSlider();

    // Initialize Cart count UI badge on load
    updateCartUI();

    // Initialize WhatsApp floating button
    initWhatsAppButton();
});



// --- UI Rendering Functions ---

// Render Cafe Menu Items
function renderCafeMenu(items) {
    if (!dom.cafeGrid) return;
    dom.cafeGrid.innerHTML = '';

    if (items.length === 0) {
        dom.cafeGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No items found.</div>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card glass-panel';
        let tagText = 'Cafe Special';
        if (item.category === 'breakfast') tagText = 'Breakfast';
        else if (item.category === 'lunch') tagText = 'Lunch Menu';
        else if (item.category === 'dinner') tagText = 'Dinner Menu';
        else if (item.category === 'desserts') tagText = 'Sweets & Desserts';

        card.innerHTML = `
            <div class="card-image-wrapper">
                <div class="card-tag">${tagText}</div>
                <img src="${item.image}" alt="${item.name}" class="card-img">
            </div>
            <div class="card-info">
                <div class="card-title-row">
                    <h3 class="card-title">${item.name}</h3>
                </div>
                <p class="card-desc">${item.description}</p>
                ${item.customizable ? `
                <div class="card-footer">
                    <div class="item-options">
                        <span style="font-size: 0.75rem; background: rgba(229,184,105,0.1); padding: 2px 6px; border-radius: 4px;">Customizable</span>
                    </div>
                </div>` : ''}
            </div>
        `;
        dom.cafeGrid.appendChild(card);
    });
}

// Render Grocery Store Products
function renderGroceryStore(items) {
    if (!dom.groceryGrid) return;
    dom.groceryGrid.innerHTML = '';

    if (items.length === 0) {
        dom.groceryGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No items match your search. Try "honey" or "spices"!</div>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card glass-panel';

        let tagText = 'Organic';
        if (item.category === 'spices') tagText = 'Spices & Herbs';
        else if (item.category === 'honey') tagText = 'Mountain Honey';
        else if (item.category === 'tea') tagText = 'Tea & Coffee';
        else if (item.category === 'grains') tagText = 'Grains & Staples';
        else if (item.category === 'dairy') tagText = 'Dairy & Eggs';
        else if (item.category === 'bakery') tagText = 'Bakery & Snacks';
        else if (item.category === 'essentials') tagText = 'Essentials & Care';

        card.innerHTML = `
            <div class="card-image-wrapper">
                <div class="card-tag">${tagText}</div>
                <img src="${item.image}" alt="${item.name}" class="card-img">
            </div>
            <div class="card-info">
                <div class="card-title-row">
                    <h3 class="card-title">${item.name}</h3>
                </div>
                <p class="card-desc">${item.description}</p>
            </div>
        `;
        dom.groceryGrid.appendChild(card);
    });
}

// --- Navigation Helpers ---

function toggleMobileMenu() {
    if (!dom.navLinks) return;
    dom.navLinks.classList.toggle('open');

    // Animate lines
    const spans = dom.mobileMenuBtn.querySelectorAll('span');
    if (dom.navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

function highlightActiveNavLink() {
    if (!dom.navLinks) return;
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    dom.navLinks.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
        const href = a.getAttribute('href');

        if (href === page ||
            (page === 'index.html' && href.includes('index.html')) ||
            ((page === '' || page === '/') && href.includes('index.html')) ||
            (href.includes('services.html') && (page === 'services.html' || page === 'cafe.html' || page === 'grocery.html'))) {
            a.classList.add('active');
        }
    });
}



// --- Menu Filtering & Searching ---

function filterCafeMenu(category, btnEl) {
    const tabsContainer = document.getElementById('cafe-category-tabs');
    if (!tabsContainer) return;
    tabsContainer.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
    btnEl.classList.add('active');

    if (category === 'all') {
        renderCafeMenu(state.cafeMenu);
    } else {
        const filtered = state.cafeMenu.filter(item => item.category === category);
        renderCafeMenu(filtered);
    }
}

function handleGrocerySearch(query) {
    if (!dom.groceryCategory) return;
    const cat = dom.groceryCategory.value;
    filterGroceries(query, cat);
}

function handleGroceryCategory(category) {
    if (!dom.grocerySearch) return;
    const query = dom.grocerySearch.value;
    filterGroceries(query, category);
}

function filterGroceries(query, category) {
    let results = state.groceryProducts;

    if (category !== 'all') {
        results = results.filter(p => p.category === category);
    }

    if (query.trim() !== '') {
        const cleanQuery = query.toLowerCase().trim();
        results = results.filter(p =>
            p.name.toLowerCase().includes(cleanQuery) ||
            p.description.toLowerCase().includes(cleanQuery)
        );
    }

    renderGroceryStore(results);
}

// --- Cafe Customization Modal Logic ---

function handleCafeAddClick(itemId) {
    const item = state.cafeMenu.find(i => i.id === itemId);
    if (!item) return;

    if (item.customizable) {
        state.currentCustomizingItem = JSON.parse(JSON.stringify(item));
        openCustomizeModal(state.currentCustomizingItem);
    } else {
        addToCart(itemId, 'cafe');
    }
}

function openCustomizeModal(item) {
    if (!dom.customizeModal) return;
    dom.customizeTitle.textContent = item.name;
    dom.customizePrice.textContent = `Base Price: ₹${item.price}`;

    const tempOpts = ['Hot Brew', 'Over Ice'];
    const milkOpts = ['Whole Milk', 'Oat Milk (+₹30)', 'No Milk'];
    const sweetOpts = ['Low Sweet', 'Medium', 'Extra Honey (+₹10)'];

    renderOptionPills(dom.customizeTemp, tempOpts, item.defaultOptions.temp, 'temp');
    renderOptionPills(dom.customizeMilk, milkOpts, item.defaultOptions.milk, 'milk');
    renderOptionPills(dom.customizeSweet, sweetOpts, item.defaultOptions.sweet, 'sweet');

    calculateCustomPrice();
    dom.customizeModal.classList.add('open');
}

function closeCustomizeModal() {
    if (dom.customizeModal) dom.customizeModal.classList.remove('open');
    state.currentCustomizingItem = null;
}

function renderOptionPills(container, options, selectedVal, type) {
    if (!container) return;
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = `option-pill-btn ${opt.includes(selectedVal) || opt === selectedVal ? 'selected' : ''}`;
        btn.textContent = opt;
        btn.onclick = () => {
            container.querySelectorAll('.option-pill-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            let val = opt;
            if (opt.includes(' (+')) {
                val = opt.split(' (+')[0];
            }
            state.currentCustomizingItem.defaultOptions[type] = val;
            calculateCustomPrice();
        };
        container.appendChild(btn);
    });
}

function calculateCustomPrice() {
    if (!state.currentCustomizingItem) return;

    let base = state.currentCustomizingItem.price;
    const opts = state.currentCustomizingItem.defaultOptions;

    if (opts.milk === 'Oat Milk') base += 30;
    if (opts.sweet === 'Extra Honey') base += 10;

    dom.customizePrice.textContent = `Customized Price: ₹${base}`;
    state.currentCustomizingItem.calculatedPrice = base;
}

function confirmCustomizedCafeAdd() {
    if (!state.currentCustomizingItem) return;

    const customizedItem = state.currentCustomizingItem;
    const details = `${customizedItem.defaultOptions.temp}, ${customizedItem.defaultOptions.milk}, ${customizedItem.defaultOptions.sweet}`;
    const uniqueId = `${customizedItem.id}_${customizedItem.defaultOptions.temp[0]}${customizedItem.defaultOptions.milk[0]}${customizedItem.defaultOptions.sweet[0]}`;

    const cartIndex = state.cart.findIndex(i => i.cartId === uniqueId);

    if (cartIndex > -1) {
        state.cart[cartIndex].quantity += 1;
    } else {
        state.cart.push({
            cartId: uniqueId,
            id: customizedItem.id,
            name: `${customizedItem.name}`,
            optionsSummary: details,
            price: customizedItem.calculatedPrice || customizedItem.price,
            quantity: 1,
            type: 'cafe',
            imageClass: customizedItem.imageClass
        });
    }

    closeCustomizeModal();
    updateCartUI();
    saveCartToStorage();
    showToast(`Added customized ${customizedItem.name} to basket!`, 'success');
}

// --- Success Modal Overlays ---

function openSuccessModal(title, msg) {
    if (!dom.successModal) return;
    dom.successTitle.textContent = title;
    dom.successMessage.textContent = msg;
    dom.successModal.classList.add('open');
}

function closeSuccessModal() {
    if (dom.successModal) dom.successModal.classList.remove('open');
}

// --- Toast System ---

function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-notifications-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = "🔔";
    if (type === 'success') icon = "✔️";

    toast.innerHTML = `
        <span>${icon}</span>
        <div>${message}</div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 3500);
}

// --- FAQ Accordion ---
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// --- Testimonials Slider Logic ---
let currentTestimonialIndex = 0;

function initTestimonialsSlider() {
    const prevBtn = document.getElementById('testimonial-prev-btn');
    const nextBtn = document.getElementById('testimonial-next-btn');
    const track = document.getElementById('testimonials-track');

    if (!track || !prevBtn || !nextBtn) return;

    const slideTestimonials = () => {
        const cards = track.querySelectorAll('.testimonial-card');
        if (cards.length === 0) return;

        let cardsPerView = 3;
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 992) {
            cardsPerView = 2;
        }

        const maxIndex = cards.length - cardsPerView;
        if (currentTestimonialIndex > maxIndex) currentTestimonialIndex = maxIndex;
        if (currentTestimonialIndex < 0) currentTestimonialIndex = 0;

        const cardWidth = cards[0].offsetWidth;
        const gap = 30; // Matches gap in CSS
        const offset = currentTestimonialIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        // Enable/disable buttons based on boundaries
        prevBtn.style.opacity = currentTestimonialIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentTestimonialIndex === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = currentTestimonialIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.cursor = currentTestimonialIndex >= maxIndex ? 'not-allowed' : 'pointer';
    };

    prevBtn.addEventListener('click', () => {
        if (currentTestimonialIndex > 0) {
            currentTestimonialIndex--;
            slideTestimonials();
        }
    });

    nextBtn.addEventListener('click', () => {
        const cards = track.querySelectorAll('.testimonial-card');
        let cardsPerView = 3;
        if (window.innerWidth <= 768) cardsPerView = 1;
        else if (window.innerWidth <= 992) cardsPerView = 2;

        if (currentTestimonialIndex < cards.length - cardsPerView) {
            currentTestimonialIndex++;
            slideTestimonials();
        }
    });

    // Run layout adjustments on resize
    window.addEventListener('resize', slideTestimonials);

    // Initial run
    slideTestimonials();
}

// --- Gallery Dynamic Rendering & Interactive Lightbox ---
let currentLightboxIndex = 0;

function renderGalleryItems() {
    if (!dom.galleryGrid) return;
    dom.galleryGrid.innerHTML = '';

    const products = [];

    // Cafe Scenes & Views (Cozy cafe vibe images)
    const cafeScenes = [
        {
            id: 'scene_cafe_1',
            name: 'Cozy Cafe Interior',
            description: 'Step inside the cozy wooden interiors of Masala Club, featuring warm ambient lighting, rustic seating, and a panoramic glass facade overlooking the snow-capped Himalayan ranges.',
            image: 'assets/cafe_hero.png',
            category: 'cafe',
            tagText: 'Cafe Scene'
        },
        {
            id: 'scene_cafe_2',
            name: 'Sunset Balcony Deck',
            description: 'Enjoy your warm brews in the crisp mountain air on our open balcony deck, offering front-row seats to the majestic sunset painting the Himalayan ridges.',
            image: 'assets/cafe_outdoor.png',
            category: 'cafe',
            tagText: 'Cafe Scene'
        },
        {
            id: 'scene_cafe_3',
            name: 'Masala Club Exterior',
            description: `The welcoming storefront of Masala Club, located at 30°24'34.8"N 79°19'31.8"E in Vivekananda Colony, Haldapani, Gopeshwar, combining rustic mountain architecture with modern glass facades.`,
            image: 'assets/masala_club_exterior.png',
            category: 'cafe',
            tagText: 'Cafe Exterior'
        },
        {
            id: 'scene_cafe_4',
            name: 'Traditional Spice Kitchen',
            description: 'Our authentic wood-fired Himalayan kitchen where we prepare traditional spices, local tea blends, and mountain specialities.',
            image: 'assets/pahadi_kitchen.png',
            category: 'cafe',
            tagText: 'Cafe Kitchen'
        },
        {
            id: 'scene_cafe_5',
            name: 'Fireside Kulhad Tea',
            description: 'Warm up by our cozy indoor fireplace with a piping hot cup of traditional clay-pot Kulhad Masala Tea, brewed with organic ginger and mountain cardamom.',
            image: 'assets/kulhad_tea.jpg',
            category: 'cafe',
            tagText: 'Cafe Vibe'
        },
        {
            id: 'scene_cafe_6',
            name: 'Himalayan Tea Sourcing',
            description: 'Watch our kitchen artisans brew authentic masala chai and mountain butter tea using copper vessels and high-altitude ingredients.',
            image: 'assets/himalayan_tea_prep.png',
            category: 'cafe',
            tagText: 'Tea Sourcing'
        },
        {
            id: 'scene_cafe_7',
            name: 'Steaming Pahadi Momos',
            description: 'Savor hand-folded mountain momos filled with fresh local vegetables, served hot on our outdoor deck.',
            image: 'assets/pahadi_momos.png',
            category: 'cafe',
            tagText: 'Cafe Special'
        },
        {
            id: 'scene_cafe_8',
            name: 'Traditional Suja Butter Tea',
            description: 'Enjoying authentic Himalayan salty tea churned with fresh yak butter, served in traditional wooden cups.',
            image: 'assets/butter_tea.png',
            category: 'cafe',
            tagText: 'Cafe Special'
        }
    ];

    // Grocery Cooperative Scenes & Views (Organic grocery products & produce)
    const groceryScenes = [
        {
            id: 'scene_groc_1',
            name: 'Cooperative Produce Shelf',
            description: 'Browse our shelves stocked with premium local cooperative harvests—from raw mountain honey to unrefined spices and traditional valley grains.',
            image: 'assets/grocery_products.png',
            category: 'grocery',
            tagText: 'Co-op Shop'
        },
        {
            id: 'scene_groc_2',
            name: 'Wild Forest Honey',
            description: 'Our raw mountain honey gathered by local tribes in high altitude coniferous forests.',
            image: 'assets/wild_honey.jpg',
            category: 'grocery',
            tagText: 'Mountain Honey'
        },
        {
            id: 'scene_groc_3_buransh',
            name: 'Dried Buransh Petals',
            description: 'Hand-picked, sun-dried crimson rhododendron (Buransh) petals from the high forests of Chamoli, ideal for making traditional teas, squashes, and infusions.',
            image: 'assets/buransh_flowers.png',
            category: 'grocery',
            tagText: 'Spices & Herbs'
        },
        {
            id: 'scene_groc_3_shivakton',
            name: 'Himalayan Shivakton Juice',
            description: '100% pure, nutrient-dense Sea Buckthorn berry juice, packed with vitamins and essential Omega fatty acids directly from high-altitude slopes.',
            image: 'assets/seabuckthorn.png',
            category: 'grocery',
            tagText: 'Superfoods'
        },
        {
            id: 'scene_groc_3_tulshi',
            name: 'Organic Tulshi Leaves',
            description: 'Aromatic, sun-dried holy basil (Tulsi) leaves hand-picked from organic home gardens in Chamoli valleys, ideal for soothing infusions.',
            image: 'assets/tulsi.png',
            category: 'grocery',
            tagText: 'Spices & Herbs'
        },
        {
            id: 'scene_groc_4',
            name: 'Golden Needle Tea',
            description: 'Rare high-altitude black tea buds with delicate golden tips and a natural sweet finish.',
            image: 'assets/golden_needle_tea.jpg',
            category: 'grocery',
            tagText: 'Tea & Coffee'
        },
        {
            id: 'scene_groc_5',
            name: 'Stoneground Mandua Flour',
            description: 'Packaged finger millet (Ragi) flour stoneground using local watermills in the valley.',
            image: 'assets/mandua_flour.jpg',
            category: 'grocery',
            tagText: 'Grains & Staples'
        },
        {
            id: 'scene_groc_6',
            name: 'Himalayan Pink Salt',
            description: 'Pure, mineral-rich pink rock salt crystals sourced from ancient Himalayan beds.',
            image: 'assets/pink_salt.jpg',
            category: 'grocery',
            tagText: 'Spices & Herbs'
        },
        {
            id: 'scene_groc_7',
            name: 'Red Terraced Rice',
            description: 'Nutritious unpolished red grain rice irrigated by clean mountain streams.',
            image: 'assets/red_rice.jpg',
            category: 'grocery',
            tagText: 'Grains & Staples'
        },
        {
            id: 'scene_groc_8',
            name: 'Artisanal Sourdough Bread',
            description: 'Freshly baked sourdough prepared daily using local wild yeast and mountain spring water.',
            image: 'assets/bread.png',
            category: 'grocery',
            tagText: 'Bakery & Snacks'
        },
        {
            id: 'scene_groc_9',
            name: 'Desi Ghee Cardamom Cookies',
            description: 'Crispy cookies baked with organic green cardamom, local wheat flour, and pure Desi ghee.',
            image: 'assets/cardamom_cookies.png',
            category: 'grocery',
            tagText: 'Bakery & Snacks'
        },
        {
            id: 'scene_groc_10',
            name: 'Artisanal Pahadi Gouda Cheese',
            description: 'Semi-hard cheese aged for 3 months, crafted using fresh mountain cow milk.',
            image: 'assets/cheese.png',
            category: 'grocery',
            tagText: 'Dairy & Eggs'
        },
        {
            id: 'scene_groc_11',
            name: 'Desi Ghee Kaju Mathri',
            description: 'Crispy, flaky wheat flour crackers prepared with pure Desi Ghee and cashews.',
            image: 'assets/kaju_mathri.JPG',
            category: 'grocery',
            tagText: 'Bakery & Snacks'
        },
        {
            id: 'scene_groc_12',
            name: 'Himalayan Dry Fruit Ladoo',
            description: 'Nutritious sweet energy balls naturally sweetened with wild forest honey and dried fruits.',
            image: 'assets/dry_fruit_ladoo.jpg',
            category: 'grocery',
            tagText: 'Mountain Sweets'
        },
        {
            id: 'scene_groc_13',
            name: 'Cold-Pressed Mustard Oil',
            description: 'Traditional wood-pressed pure mustard oil rich in natural nutrients.',
            image: 'assets/mustard_oil.png',
            category: 'grocery',
            tagText: 'Grains & Staples'
        },
        {
            id: 'scene_groc_14',
            name: 'Fresh A2 Cow Milk',
            description: 'Pure, fresh high-altitude A2 cow milk sourced daily from local pastures.',
            image: 'assets/milk.png',
            category: 'grocery',
            tagText: 'Dairy & Eggs'
        },
        {
            id: 'scene_groc_15',
            name: 'Organic Mountain Butter',
            description: 'Lightly salted butter churned from fresh mountain cow milk.',
            image: 'assets/butter.png',
            category: 'grocery',
            tagText: 'Dairy & Eggs'
        },
        {
            id: 'scene_groc_16',
            name: 'Himalayan Multigrain Muesli',
            description: 'A crunchy mix of toasted local millets, oats, and dry buransh flower petals.',
            image: 'assets/millet_muesli.png',
            category: 'grocery',
            tagText: 'Grains & Staples'
        },
        {
            id: 'scene_groc_17',
            name: 'Cardamom Dark Chocolate',
            description: 'Rich 70% dark chocolate handcrafted with aromatic green cardamom pods.',
            image: 'assets/dark_chocolate.jpg',
            category: 'grocery',
            tagText: 'Bakery & Snacks'
        },
        {
            id: 'scene_groc_18',
            name: 'Organic Sweet Corn',
            description: 'Sweet yellow corn kernels hand-harvested from high-altitude fields of Chamoli.',
            image: 'assets/sweet_corn.png',
            category: 'grocery',
            tagText: 'Grains & Staples'
        },
        {
            id: 'scene_groc_19',
            name: 'Premium Basmati Rice',
            description: 'Aged long-grain Basmati rice sourced from fertile valley fields.',
            image: 'assets/basmati_rice.png',
            category: 'grocery',
            tagText: 'Grains & Staples'
        },
        {
            id: 'scene_groc_20',
            name: 'Sun-dried Aam Papad',
            description: 'Sweet and tangy sun-dried mango pulp sheets rolled into thin layers.',
            image: 'assets/aam_papad.jpg',
            category: 'grocery',
            tagText: 'Spices & Herbs'
        }
    ];

    // Prepend the atmospheric/scenic images for both categories
    products.push(...cafeScenes);
    products.push(...groceryScenes);

    // Keep reference in state
    state.galleryItems = products;

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card glass-panel gallery-item';
        card.setAttribute('data-category', product.category);
        card.style.overflow = 'hidden';
        card.style.cursor = 'pointer';

        card.addEventListener('click', () => {
            openLightbox(index);
        });

        card.innerHTML = `
            <div class="card-image-wrapper" style="height: 280px; position: relative;">
                <div class="card-tag">${product.tagText}</div>
                <img src="${product.image}" alt="${product.name}" class="card-img" style="height: 100%;">
                <div class="gallery-hover-overlay">
                    <div class="gallery-hover-content">
                        <span class="gallery-hover-category">${product.tagText}</span>
                        <h4 class="gallery-hover-title">${product.name}</h4>
                        <span class="gallery-hover-action">Click to View details 🔍</span>
                    </div>
                </div>
            </div>
        `;
        dom.galleryGrid.appendChild(card);
    });
}

function filterGallery(category, btnEl) {
    const tabsContainer = document.getElementById('gallery-category-tabs');
    if (tabsContainer) {
        tabsContainer.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
    }
    if (btnEl) {
        btnEl.classList.add('active');
    }

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        item.classList.remove('fade-in');

        if (category === 'all' || itemCategory === category) {
            item.classList.remove('hidden');
            void item.offsetWidth;
            item.classList.add('fade-in');
        } else {
            item.classList.add('hidden');
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const item = state.galleryItems[index];
    if (!item) return;

    const modal = document.getElementById('gallery-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const tag = document.getElementById('lightbox-tag');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');

    if (!modal || !img || !tag || !title || !desc) return;

    img.src = item.image;
    img.alt = item.name;
    tag.textContent = item.tagText;
    title.textContent = item.name;
    desc.textContent = item.description;

    modal.classList.add('open');
}

function closeLightbox() {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function navigateLightbox(direction) {
    const totalItems = state.galleryItems.length;
    if (totalItems === 0) return;

    const activeTab = document.querySelector('#gallery-category-tabs .filter-tab.active');
    let activeCategory = 'all';
    if (activeTab) {
        const tabText = activeTab.textContent.toLowerCase();
        if (tabText.includes('cafe')) activeCategory = 'cafe';
        else if (tabText.includes('grocery')) activeCategory = 'grocery';
    }

    let filteredIndices = [];
    state.galleryItems.forEach((item, idx) => {
        if (activeCategory === 'all' || item.category === activeCategory) {
            filteredIndices.push(idx);
        }
    });

    if (filteredIndices.length === 0) return;

    let currentPos = filteredIndices.indexOf(currentLightboxIndex);
    if (currentPos === -1) {
        currentLightboxIndex = filteredIndices[0];
    } else {
        let newPos = (currentPos + direction + filteredIndices.length) % filteredIndices.length;
        currentLightboxIndex = filteredIndices[newPos];
    }

    const item = state.galleryItems[currentLightboxIndex];
    if (!item) return;

    const img = document.getElementById('lightbox-img');
    const tag = document.getElementById('lightbox-tag');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');

    if (img) {
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = item.image;
            img.alt = item.name;
            tag.textContent = item.tagText;
            title.textContent = item.name;
            desc.textContent = item.description;
            img.style.opacity = 1;
        }, 150);
    }
}

// Expose functions to window scope for onclick actions
window.renderGalleryItems = renderGalleryItems;
window.filterGallery = filterGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.navigateLightbox = navigateLightbox;

// --- Basket / Cart State Management & UI Helpers ---
function saveCartToStorage() {
    try {
        localStorage.setItem('masala_club_cart', JSON.stringify(state.cart));
    } catch (e) {
        console.error("Failed to save cart", e);
    }
}

function updateCartUI() {
    const cartCountEl = document.querySelector('.cart-count');
    if (cartCountEl) {
        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;
        cartCountEl.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function addToCart(itemId, type) {
    let item;
    if (type === 'cafe') {
        item = state.cafeMenu.find(i => i.id === itemId);
    } else {
        item = state.groceryProducts.find(i => i.id === itemId);
    }

    if (!item) return;

    const uniqueId = item.id;
    const cartIndex = state.cart.findIndex(i => i.cartId === uniqueId);

    if (cartIndex > -1) {
        state.cart[cartIndex].quantity += 1;
    } else {
        state.cart.push({
            cartId: uniqueId,
            id: item.id,
            name: item.name,
            optionsSummary: type === 'grocery' ? item.weight : '',
            price: item.price,
            quantity: 1,
            type: type,
            image: item.image,
            imageClass: item.imageClass
        });
    }

    updateCartUI();
    saveCartToStorage();
    showToast(`Added ${item.name} to basket!`, 'success');
}

// --- WhatsApp Floating Button Initializer ---
function initWhatsAppButton() {
    // Check if the button already exists to prevent duplication
    if (document.querySelector('.whatsapp-float-btn')) return;

    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = "https://wa.me/917895447152?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Masala%20Club.";
    whatsappBtn.target = "_blank";
    whatsappBtn.rel = "noopener noreferrer";
    whatsappBtn.className = "whatsapp-float-btn";
    whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsappBtn.title = "Chat on WhatsApp";
    whatsappBtn.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.945 9.945 0 0 0 4.777 1.21h.005c5.505 0 9.99-4.478 9.99-9.986A9.97 9.97 0 0 0 12.012 2zm5.82 14.16c-.253.715-1.47 1.3-2.014 1.386-.49.076-1.127.143-3.258-.741-2.724-1.129-4.48-3.9-4.616-4.082-.137-.18-1.108-1.473-1.108-2.81 0-1.337.698-1.996.944-2.261.245-.265.545-.332.727-.332.18 0 .363.003.52.01.163.008.384-.063.603.468.225.546.772 1.884.84 2.02.067.137.112.296.02.482-.09.186-.137.3-.272.457-.136.157-.285.351-.408.47-.137.133-.28.28-.12.557.16.277.71 1.171 1.52 1.892.808.721 1.488.943 1.76 1.077.273.133.432.112.593-.074.161-.186.698-.813.888-1.09.19-.278.381-.233.644-.137.263.096 1.666.786 1.952.93.285.143.476.215.546.335.07.12.07.698-.183 1.413z" />
        </svg>
    `;
    document.body.appendChild(whatsappBtn);
}

