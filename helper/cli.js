const readline = require('readline');

var rl = readline.createInterface( 
    process.stdin, process.stdout);

const ask = async (question, options=[]) => {
    return new Promise(async resolve => {
        console.log("—————————————————");
        console.log(question);
        if (options && options.length > 0) console.log("Options:", options.join(", "));
        console.log("—————————————————");
        rl.question(": ", async answer => {
            if (options && options.length > 0) {
                let found = options.includes(answer);
                if (!found) {
                    console.log((Array.from(new Array(10)).map(() => "\n")).join(""))
                    console.log(`Option "${answer}" not found.`)
                    return resolve(await ask(question, options));
                }
            }
            resolve(answer);
        })
    })
}

const askBool = async question => {
    return await ask(question + " (Y/n)").then(res => res == "Y" || res == "y");
}

module.exports = {
    ask,
    askBool,
};