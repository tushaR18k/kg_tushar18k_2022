const numberMappings = {
    '0':'Zero',
    '1': 'One',
    '2': 'Two',
    '3':'Three',
    '4':'Four',
    '5':'Five',
    '6':'Six',
    '7':'Seven',
    '8':'Eight',
    '9':'Nine'
}

let myargs = process.argv.slice(2)
let wordRepresentationsOfNumbers = ""
myargs.forEach(element => {
    let wordRepresentationsOfANumber = ""
    for(let i=0;i<element.length;i++){
        wordRepresentationsOfANumber += numberMappings[element[i]]
    }
    wordRepresentationsOfNumbers += wordRepresentationsOfANumber  + ","
});

wordRepresentationsOfNumbers = wordRepresentationsOfNumbers.slice(0,-1)
console.log(wordRepresentationsOfNumbers)

