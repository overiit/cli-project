const activeSections = require("./activeSections");

const cli = require("./helper/cli");

let sections = {};
for (let section of activeSections) {
  if (!section.name)
    throw new Error("Section doesn't have a valid name initialized.");
  if (!section.start)
    throw new Error(
      `Section "${section.name}" doesn't have a valid start function.`
    );
  sections[section.name] = section;
}

const start = async () => {
  let section = await cli.ask(
    "Which category would you like to access?",
    Object.keys(sections)
  );
  sections[section].start(start);
};

module.exports = {
  start,
};
