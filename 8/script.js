function makeRandomArray()
{
    return exampleArray = [Math.random(), Math.random(), Math.random(), Math.random(), "Det här är fyra floats mellan 0 och 1"]
    
    /*
    return [Math.random(), Math.random(), Math.random(), Math.random(), "Det här är fyra floats mellan 0 och 1"]
    Det gröna funkar också, men det ger inte en array med ett fint namn, vad jag vet.
    */
    
}
console.log(makeRandomArray())
console.log(exampleArray)