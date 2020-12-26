const Command = require("../../interface/command");
const Section = require("../../interface/section");

const HelloWorld = require("../commands/HelloWorld")

class BlankSection extends Section {

    constructor () {
        super("BlankSection");
        this.addCommand(new Command("test", this));
        this.addCommand(new HelloWorld("helloworld", this));
    }

}

module.exports = BlankSection;