require("./db/connection");
const mongoose = require("mongoose");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { addMovie, list, updateMovie } = require("./film/filmMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    await addMovie({
      name: argv.title,
      actor: argv.actor,
    });
  } else if (argv.list) {
    list();
  } else if (argv.update) {
    // { name : "a film"}
    const filterKey = argv.filterKey;
    const filterValue = argv.filterValue;
    const updateKey = argv.updateKey;
    const updateVallemon = argv.updateValue;
    const theChange = argv.change;
    const thing = { filterKey: filterValue }, { updateKey: updateVallemon };
    await updateMovie({ name : "a film"}, { name : "a film"});
    // console.log(argv.filter, argv.change);
    // console.log(theFilter, theChange);
    // console.log(
    //   `{ ${argv.filterType} : "${argv.filterVal}"}, `,
    //   `{ ${argv.updateType} : "${argv.updateVal}"} `
    // );
  } else {
    console.log("wrong command");
  }
};

app();
