// Display the welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Handle program closure
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
