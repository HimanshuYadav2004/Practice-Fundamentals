const largestAmongThree = (a, b , c) =>{
    if( a < b){
        if( b < c){
            return 'c is greatest'
        }
        else{
            return 'b is greatest'
        }
    }
    else if( b < c){
        if( c < a){
            return 'a is greatest'
        }
    }
    else{
        return 'no output'
    }
}

console.log(largestAmongThree(5,7,10))
console.log(largestAmongThree(6,8,2))
console.log(largestAmongThree(9,2,8))