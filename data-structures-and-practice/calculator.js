const args = process.argv.splice(2);

if (args.length === 3) {
  switch (args[0]) {
    case '+':
      console.log(+args[1] + +args[2]);
      break;
    case '-':
      console.log(+args[1] - +args[2]);
      break;
    case '*':
      console.log(+args[1] * +args[2]);
      break;
    case '/':
      console.log(+args[1] / +args[2]);
      break;
    default:
      console.log('I do not know this operation.');
  }
} else {
  console.log('Not the right number of input parameters.');
}
