const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userProfile = {};
const questions = [
  "What's your name? Nicknames are also acceptable: ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.): ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

const askQuestions = function (index) {
  if (index === questions.length) {
    console.log("User Profile:");
    console.log(userProfile);
    rl.close();
    return;
  }

  rl.question(questions[index], (answer) => {
    userProfile[`answer${index + 1}`] = answer;
    askQuestions(index + 1);
  });
};

askQuestions(0);
