function classifier(arr) {
  let obj = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    object: 0,
    function: 0,
  };
  for (let i = 0; i < arr.lenght; i++) {
    obj[typeof arr[i]] += 1;
    // console.log(obj[typeof arr[i]]);
  }
//   console.log(obj);
}

classifier([1, 2, "amir", null,undefined,function (){},true,{amir:1}]);
