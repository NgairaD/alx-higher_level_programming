const Args = process.argv;
const argValue = parseInt(Args);
if (!isNaN(argValue)) {
  console.log('My number:', argValue);
} else {
  console.log('not a number');
}
