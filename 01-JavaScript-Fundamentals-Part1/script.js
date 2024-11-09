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

const calculateTotal = function (price, quantity) {
  // Tentukan toal harga dari harga dikali jumlah barang
  const quantityPrice = price * quantity;
  // Jika total belanja lebih dari 100000, discount 15%
  const discount = quantityPrice > 100000 ? quantityPrice * 0.15 : 0;
  const priceAfterDiscount = quantityPrice - discount;
  //   Hasil total belanja yang dikurangi diskon ditambah pajak 11%
  const tax = priceAfterDiscount * 0.11;
  const total = priceAfterDiscount + tax;
  //   return harga akhir
  return `Jumlah barang: ${quantity}\nHarga perbarang: ${price}\nTotal awal: ${quantityPrice}\nDiscount 15%: ${
    discount ? discount : `-`
  }\nHarga Setelah Discount: ${priceAfterDiscount}\nPPN: ${tax}\nTotal akhir: ${total}`;
};

const isPalindrome = function (word) {
  const toLowerCase = word.toLowerCase();
  const a = toLowerCase.split("");
  const aReverse = a.reverse();
  return toLowerCase === aReverse.join("");
};

const fizzBuzz = function (numbers) {
  for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20);
