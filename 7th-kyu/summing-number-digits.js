function sumDigits(number) {
    //number goes absolute
    let absNumber = Math.abs(number);
    //number is split and then mapped, so it remains a number
    let splitNumber = absNumber.toString().split('').map(Number);
    let count = 0;
    //iteration of numbers ins array added to accumulator
    for (let i = 0; i < splitNumber.length; i++) {
      count += parseInt(splitNumber[i]);
    }
    return count;
}