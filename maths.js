var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
   const n1 =  Math.floor(Math.random() * 5);
   document.getElementById('n1').innerHTML = n1;

   const n2 =  Math.floor(Math.random() * 6);
   document.getElementById('n2').innerHTML = n2;

   answer = n1 + n2;
}

function checkAnswer() {
    
    const prediction = predictImage();

    if(prediction == answer){
        score++;
        if(score <= 6){
            backgroundImages.push(`url('images/background${score}.svg')`)
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Congratulations! Your math garden is in full bloom! Let\'s start again!')
            score = 0;
            backgroundImages = []
            document.body.style.backgroundImage = backgroundImages;
        }
    } else {
        if(prediction == undefined) {
            alert('Uh oh! You didn\'t write a response. Make sure to write your response in the box neatly!')
        } else {
            alert('Oh no! Check your calculation and try writing the number more neatly next time!')
        }
        if(score != 0){
            score--;
        }
        backgroundImages.pop();
        setTimeout(function() {
            document.body.style.backgroundImage = backgroundImages;
        }, 500)

    }
}