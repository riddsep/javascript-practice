const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice(1, -2);
  const bothDogs = [...dogsJuliaCorrect, ...dogsKate];
  console.log(bothDogs);

  bothDogs.forEach(function (dog, i) {
    const adultOrPuppy =
      dog >= 5
        ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
        : `Dog number ${i + 1} is still a puppy🐶`;
    console.log(adultOrPuppy);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log("-----------");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
