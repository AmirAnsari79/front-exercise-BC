function fiboo(n) {
    let sequence = [];
    if (n >= 1) {
      sequence.push(0);
    }
    if (n >= 2) {
      sequence.push(1);
    }
    if (n > 2) {
      for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
      }
    }
    // return sequence;
    for (let number of sequence){
        console.log(number);
    }
  }

  fiboo(6)