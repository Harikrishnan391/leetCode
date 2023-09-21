//check the code before running 

function maximum69number(num){

    const numArray=num.toString().split('')


    for(let i=0;i<numArray.length;i++){
        if(numArray[i]==='6'){
            numArray[i]='9'
            break;
        }
    }
    return  parseInt(numArray.join(''))
}


const newNum=9669
console.log(maximum69number(newNum))