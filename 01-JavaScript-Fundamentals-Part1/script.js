// const country = "Indonesia";
// const continent = "South asia";
// const population = "250000000";
// console.log(country, continent, population);

// const isIsland = true;
// let language;

// console.log(isIsland, typeof language);

// let population = "250000000";
// population++;
// const divide = population / 2;
// console.log(divide);

// const finlandiaPop = 6000000;
// const IndonesiaPop = 2500000;

// console.log(IndonesiaPop > finlandiaPop);

// const portugalPop = 6000000;
// const indonesiaPop = 2500000;
// if (indonesiaPop > portugalPop) {
//   console.log(`Portugal's population is ${indonesiaPop} million below average`);
// }

// const myCountryNeighbour = Number(
//   prompt("How many neighbour countries does your contry have?")
// );

// if (myCountryNeighbour == 1) {
//   console.log("Only 1 border!");
// } else if (myCountryNeighbour > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const language = "arabic";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
//     break;
// }
// const population = 34;
// const str =
//   population > 33
//     ? "Portugal's population is above average"
//     : "Portugal's population is below average";
// console.log(str);

// Kamu diminta untuk membuat sistem yang akan menghitung total biaya yang harus dibayar oleh pelanggan.
// Produk yang dibeli pelanggan memiliki harga dan kuantitas tertentu.
// Ada diskon 10% untuk setiap pembelian dengan total di atas 500 ribu.
// Pajak yang dikenakan adalah 11% dari total harga setelah diskon (jika ada).
// Kamu perlu menampilkan harga sebelum diskon, harga setelah diskon, dan total harga setelah pajak.

const totalCost = function (price) {
  const discount = price > 500000 ? price * 0.1 : 0;
  const after = price - discount;
  const tax = after * 0.11;
  const total = after + tax;

  return `Harga Barang: ${price}, Discount: ${after}, Pajak: ${tax}, Total: ${total}`;
};
console.log(totalCost(400000));
console.log(totalCost(600000));
