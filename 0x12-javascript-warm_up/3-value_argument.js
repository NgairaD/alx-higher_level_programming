const myArg = process.Argv;

if (myArg === undefined) {
  console.log('No argument');
} else {
  console.log(myArg);
}
