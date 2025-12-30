const buttons = document.querySelectorAll('.category');
const products = document.querySelectorAll('.product-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    products.forEach(product => {
      if (category === 'all' || product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
