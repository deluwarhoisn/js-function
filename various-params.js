/**
 * for a giving stiring tell me whether it has even number of characters or not 
 * 
 */

function evenSizeString(str){
    const size = str.length;
    console.log(str,size)
    if(size %2 ===0){
        console.log('even size');
        return true;
    }
    else{
        console,log('odd size')
        return false;
    }

}

// evenSizeString('Dhaka');
// evenSizeString('faka');

function doubleTriple(number,doubled){
    if(doubled === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleTriple(5,true));
// console.log(doubleTriple(5,false));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

numberOfElements([12,45,78,45,121254,4,5]);