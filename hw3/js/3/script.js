function aa(array,number){
    number=number.toString();
    let checker=0
    for (let i=0;i<array.length;i++){
        // console.log(typeof array[i].toString());
        if(array[i].toString().includes(number)){
            console.log(true);
            return

        }
        }
        if (checker==0)
        console.log(false);
    }




aa([11,22,33,45,76],3)