const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    total: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    total: 16,
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
    total: 20,
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    total: 8,
  },
  {
    id: 5,
    name: "Product 5",
    price: 49.99,
    total: 12,
  },
  {
    id: 6,
    name: "Product 6",
    price: 59.99,
    total: 25,
  },
  {
    id: 7,
    name: "Product 7",
    price: 69.99,
    total: 30,
  },
  {
    id: 8,
    name: "Product 8",
    price: 79.99,
    total: 18,
  },
  {
    id: 9,
    name: "Product 9",
    price: 89.99,
    total: 22,
  },
  {
    id: 10,
    name: "Product 10",
    price: 99.99,
    total: 15,
  },
];

const displayProducts = function (products) {
  products.map((p) =>
    console.log(
      `No.${p.id} Nama Produk: ${p.name} Harga Produk: ${p.price} Total Product: ${p.total}`
    )
  );
};

const addToCart = function (productId, totalProduct) {
  const matchingProduct = products.find((p) => p.id === productId);
  let paymentTotal = 0;

  if (matchingProduct) {
    if (matchingProduct.total >= totalProduct) {
      matchingProduct.total -= totalProduct;
      paymentTotal += matchingProduct.price * totalProduct;

      console.log(
        `Telah menambahkan ${matchingProduct.name} sebanyak ${totalProduct} pieces. Total Pembayaran ${paymentTotal}`
      );
      displayProducts([matchingProduct]);
    } else {
      console.log(`Product tidak cukup`);
    }
  }
};
addToCart(1, 3);

const tax = (bill) => bill * 0.1;
