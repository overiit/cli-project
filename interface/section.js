const cli = require("../helper/cli");

class Section {
    
    name;
    commands = {};

    constructor (name) {
        this.name = name;
    }

    start = async (initStart) => {
        let cmd = await cli.ask("Which action would you like to run?", [...Object.keys(this.commands), "exit"]);
        if (cmd == "exit") {
            if (initStart) return initStart();
            else throw new Error("Init Start couldnt be passed to section.")
        };
        console.log("—————————————————");
        let start = new Date().getTime();
        await this.commands[cmd].run();
        let end = new Date().getTime();
        console.log("")
        this.log(`${cmd}: Command finished (${((end-start) / 1000).toFixed(2)}s)`)
        console.log("")
        let cont = await cli.askBool("Would you like to continue?");
        if (cont) {
            this.start(initStart);
        } else {
            process.exit(0)
        }
    }

    log = (...args) => console.log(`[${this.name}]`, ...args);
    
    addCommand = (action) => {
        if (this.commands[action.name]) throw new Error(`${this.name} already has ${action.name} as command registered.`);
        this.commands[action.name] = action;
    };
}

module.exports = Section;