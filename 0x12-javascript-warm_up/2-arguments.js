const args = process.argv[2];

if (args === 2) {
  console.log('No argument');
} else if (args === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
