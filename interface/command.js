class Command {

    name;
    section;

    constructor (name, section) {
        // TODO: Handle invalid arguments passed?
        this.name = name;
        this.section = section;
    }

    run = async () => {
        this.log("Executed.");
    }

    log = (...message) => {
        this.section.log(`${this.name}: `, ...message);
    }
}

module.exports = Command;