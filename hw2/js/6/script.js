function flattenArray(arr) {
    const flat = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat.push(...flattenArray(arr[i]));
      } else {
        flat.push(arr[i]);
      }
    }
    return flat;
  }


const arr = [[1, 2, 3], 4, [5,[1,2,3]]];
console.log(flattenArray(arr));