import {
  addProductToCart,
  deleteProductToCart,
  removeProductToCart,
  fetchProducts,
  formatProducts,
} from './index.js';

import mockAxios from 'jest-mock-axios';
import * as Api from './index.js';

const product = {
  image: 'chaussure.jpg',
  name: 'chaussure',
  id: 555,
};

const cart = {
  [555]: {
    product: {
      image: 'chaussure.jpg',
      name: 'chaussure',
      id: 555,
    },
    quantity: 1,
  },
};

const cart2 = {
  [555]: {
    product: {
      image: 'chaussure.jpg',
      name: 'chaussure',
      id: 555,
    },
    quantity: 2,
  },
};

test('addProductToCart should add the product in the cart.', () => {
  expect(addProductToCart(cart, product)).toEqual({
    [555]: {
      product: {
        image: 'chaussure.jpg',
        name: 'chaussure',
        id: 555,
      },
      quantity: 2,
    },
  });
});

test('deleteProductToCart should delete the product from the cart.', () => {
  expect(deleteProductToCart(cart, product)).not.toEqual({
    [555]: {
      product: {
        image: 'chaussure.jpg',
        name: 'chaussure',
        id: 555,
      },
      quantity: 2,
    },
  });
});

test('removeProductToCart should remove the product from the cart.', () => {
  expect(removeProductToCart(cart2, product)).toEqual({
    [555]: {
      product: {
        image: 'chaussure.jpg',
        name: 'chaussure',
        id: 555,
      },
      quantity: 1,
    },
  });
});
/*
test('fetchProducts should get all products', async () => {
  jest.mock(mockAxios);
  mockAxios.get.mockResolveValue({ data: {} });

  const catchFn = jest.fn();
  const thenFn = jest.fn();

  await Api.fetchProducts()
    .then(thenFn)
    .catch(catchFn);

  mockAxios.mockResponse(responseObj);

  expect(thenFn).toHaveBeenCalled();

  expect(catchFn).not.toHaveBeenCalled();

});
*/
const product2 = {
  image:
    'https://mosaic03.ztat.net/vgs/media/pdp-gallery/PU/C2/1D/02/1Q/11/PUC21D021-Q11@1.1.jpg',
  section: 'PULL&BEAR',
  title: 'MIT RUNDAUSSCHNITT - T-shirt basique ',
  id: '0',
  price: '4,99 €',
};

test('formatProducts should return formated products.', () => {
  expect(formatProducts(product2)).toEqual({
    image:
      'https://mosaic03.ztat.net/vgs/media/pdp-gallery/PU/C2/1D/02/1Q/11/PUC21D021-Q11@1.1.jpg',
    section: 'PULL&BEAR',
    title: 'MIT RUNDAUSSCHNITT - T-shirt basique ',
    id: `${0}`,
    price: `${4},${99} €`,
  });
});
