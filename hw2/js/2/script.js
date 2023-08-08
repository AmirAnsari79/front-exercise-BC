function typeChecker(array){

    for (let i=0;i<array.length;i++){
        console.log(typeof array[i]);
    }

}

typeChecker([1,'amir',true,null,undefined,[1,2]]);