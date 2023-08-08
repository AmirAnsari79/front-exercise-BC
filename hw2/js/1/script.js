function rectangle(number) {
  if (number === 1) {
    console.log(1);
    return;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result += i;
  }

  console.log(result);
}
rectangle(6);
