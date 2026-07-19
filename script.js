let cart = JSON.parse(localStorage.getItem('trendoraCart')) || [];

const cartCount = document.getElementById('cart-count');

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function addToCart(productName) {
  cart.push(productName);
  localStorage.setItem('trendoraCart', JSON.stringify(cart));
  updateCartCount();
  alert(productName + ' added to cart!');
}

// SEARCH FUNCTION
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('keyup', function () {
  const searchValue = searchInput.value.toLowerCase();

  productCards.forEach(card => {
    const productName = card.getAttribute('data-name').toLowerCase();

    if (productName.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// INITIAL LOAD
updateCartCount();