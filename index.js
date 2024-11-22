const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
  },
  {
    id: 5,
    name: "Product 5",
    price: 49.99,
  },
  {
    id: 6,
    name: "Product 6",
    price: 59.99,
  },
  {
    id: 7,
    name: "Product 7",
    price: 69.99,
  },
  {
    id: 8,
    name: "Product 8",
    price: 79.99,
  },
  {
    id: 9,
    name: "Product 9",
    price: 89.99,
  },
  {
    id: 10,
    name: "Product 10",
    price: 99.99,
  },
];

const displayProducts = function () {
  products.map((p) =>
    console.log(`No.${p.id} Nama Produk: ${p.name} Harga Produk: ${p.price}`)
  );
};

displayProducts();

const addToCart = function (productId, totalProduct) {
  const matchingProduct = products.find((p) => p.id === productId);
};
addToCart(1, 4);
