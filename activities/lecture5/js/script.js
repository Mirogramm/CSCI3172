// Create an array of possible answers
const magicAnswers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.", 
    "Yes - definitely", "You may rely on it.", "As I see it, yes."
];
const fortuneAnswers = [
    "Do not be afraid of competition.", "An exciting opportunity lies ahead of you."
    , "It is easier to stay out than to get out.", "The family that plays together stays together."
];
// Create a function to fetch the question the user has asked 	
// Our function should also check from an empty value
function askQuestion() {
    const userQuestion = document.getElementById('userQuestion').value;

    if(userQuestion === '') {
        alert('please enter a question');
        return;
    }

    const mRand = Math.floor(Math.random() * magicAnswers.length);
    const mAnswer = magicAnswers[mRand];

    const aRand = Math.floor(Math.random() * fortuneAnswers.length);
    const aAnswer = fortuneAnswers[aRand];
    // Select a random answer from your array 
    // Display the question and answer back to the user
    // And, log the question and answer to the console
    document.getElementById('answer').textContent = `you asked: ${userQuestion};`;
    
    if(Math.floor(Math.random() * 2) === 0) {
        document.getElementById('answer2').textContent = 'The Magic 8-ball says: ' + mAnswer;
        console.log(`you asked: ${userQuestion};`);
        console.log(`Answer: ${mAnswer}`);
    } else {
        document.getElementById('answer2').textContent = 'The Fortune Cookie reveals: ' + aAnswer;
        console.log(`you asked: ${userQuestion};`);
        console.log(`Answer: ${aAnswer}`);
    }
    
}
  

