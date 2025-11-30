const products = [
    { name: 'iPhone 13', category: 'Apple', price: '$999', img: 'logo/iPhone_13_Starlight_PDP_Position-1A_Starlight_Color__TH.webp' },
    { name: 'MacBook Pro', category: 'Apple', price: '$1999', img: 'logo/image.webp' },
    { name: 'Galaxy S21', category: 'Samsung', price: '$899', img: 'logo/515YICjEg7L.jpg' },
    { name: 'Pixel 6', category: 'Google', price: '$699', img: 'logo/images (1).jpg' },
    { name: 'iPad Air', category: 'Apple', price: '$599', img: 'logo/images (2).jpg' },
    { name: 'Galaxy Tab', category: 'Samsung', price: '$499', img: 'logo/images (3).jpg' }
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>`;
        productList.appendChild(card);
    });
}

// initial display
displayProducts(products);

// search
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    displayProducts(filtered);
});
//humburger...
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

function openMenu() {
  mobileMenu.classList.remove('hidden');
  setTimeout(() => {
    mobileMenu.classList.remove('translate-x-full');
  }, 10);
}

function closeMenuFunc() {
  mobileMenu.classList.add('translate-x-full');
  setTimeout(() => {
    mobileMenu.classList.add('hidden');
  }, 500);
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active'); // تغییر شکل به ✕
  if (mobileMenu.classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenuFunc();
  }
});

closeMenu.addEventListener('click', () => {
  menuBtn.classList.remove('active'); // برگرداندن شکل همبرگر
  closeMenuFunc();
});
