import axios from 'axios';

/**
 * @param {Object} cart the cart
 * @param {Object} product the product to add
 * @returns {Object} the cart with the product added
 */
export const addProductToCart = (cart, product) => {
  if (cart[product.id]) {
    cart[product.id] = { product, quantity: cart[product.id].quantity + 1 };
  } else {
    cart[product.id] = { product, quantity: 1 };
  }
  return cart;
};

/**
 * @param {Object} cart the cart
 * @param {Object} product the product to add
 * @returns {Object} the cart with the product added
 */
export const deleteProductToCart = (cart, product) => {
  if (cart[product.id]) {
    delete cart[product.id];
  }
  return cart;
};

/**
 * @param {Object} cart the cart
 * @param {Object} product the product to add
 * @returns {Object} the cart with the product added
 */
export const removeProductToCart = (cart, product) => {
  if (cart[product.id]) {
    if (cart[product.id].quantity > 1) {
      cart[product.id] = { product, quantity: cart[product.id].quantity - 1 };
    } else {
      deleteProductToCart(cart, product);
    }
  }
  return cart;
};

/**
 * Fetch products catalog
 * @returns {Object} fetched products
 */
export const fetchProducts = () => {
  return axios.get(
    'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json'
  );
};

/**
 * @param {Object} products to format
 * @returns {Object} formatted products
 */
export const formatProducts = products => {
  const [price1, ...euro] = products.price.split(' ');
  const [value1, ...value2] = price1.split(',');

  return {
    image: products.image,
    section: products.section,
    title: products.title,
    id: `${parseInt(products.id)}`,
    price: `${parseInt(value1)},${parseInt(value2)} ${euro}`,
  };
};
