# CLI Project

The way the CLI-Project works is you first select which category/section you would like to access and then which action you would like to run within that category. Any JS code can be executed with an npm library.

## Setup
1. Install dependencies: `npm install`
1. Create sections & commands at your will

### Sections:

Sections store commands, they can be seen as category. 
1. Copy/Rename `BlankSection.js` in `./container/sections/`
2. Add this class initialized (`new BlankSection()`) to the array in `./activeSections.js`

### Commands

Commands store a `run` action that can get called whenever it is called in a section.
1. Copy/Rename `HelloWorld.js` in `./container/commands/`
2. Overwrite the `async run()` function with whatever you want to execute
3. Add your command to any section your want

## FYI
This project is kinda over-engineered. I know. I was just bored.
