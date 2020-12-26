const Command = require("../../interface/command");

class HelloWorld extends Command {
    
    run = () => {
        console.log("Hello world");
    }

}

module.exports = HelloWorld;