# CLI Projects

The way the CLI works is you first selection which category/section you would like to enter and then which action you would like to run.

## Setup

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