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
// console.log('my args: ',myargs)
myargs.forEach(element => {
    let stringnum = ""
    for(let i=0;i<element.length;i++){
        stringnum += numberMappings[element[i]]
    }
    console.log(stringnum)
});