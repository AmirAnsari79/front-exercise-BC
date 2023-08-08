function convertToArray(obj){
    const entriesArray = Object.keys(obj).map(key => [key, obj[key]]);
    console.log(entriesArray);
}
const obj = {
    name: 'amir',
    age: 22,
    gender: 'male',
    job:'nurse'
  };


  convertToArray(obj);


