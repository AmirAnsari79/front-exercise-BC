function getKeyObject(obj){
    // console.log(1);
    let arr=[]
    for(val in obj){
    
    arr.push(obj[val]);
    
    }
    console.log(arr);


}


const obj={
    amir:1,
    jafar:2,
    reza:3
}

getKeyObject(obj);