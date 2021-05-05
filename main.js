const numberMappings = {                          //numberical number mappings to string
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

let myargs = process.argv.slice(2)            // parse the command line arguments
let wordRepresentationsOfNumbers = ""         // String to hold the final answer and print the output as required
myargs.forEach(element => {                    // iterating through each of the inputs
    let wordRepresentationsOfANumber = ""
    for(let i=0;i<element.length;i++){         // iterating through each of the character of the input
        wordRepresentationsOfANumber += numberMappings[element[i]]      // converting each number to its string representation.
    }
    wordRepresentationsOfNumbers += wordRepresentationsOfANumber  + ","    //adding the string representation of the number to the output string
});

wordRepresentationsOfNumbers = wordRepresentationsOfNumbers.slice(0,-1)   
console.log(wordRepresentationsOfNumbers)                   // output

