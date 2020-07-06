let myQuestions = [
    {
        question: "Em que ano iniciou a 1ª Guerra Mundial?",
        answers: {
            a: '1914',
            b: '1918',
            c: '1945',
            d: '1901'
        },
        correctAnswer: 'a'
    },
    {
        question: "Em que ano terminou a 2ª Guerra Mundial?",
        answers: {
            a: '1939',
            b: '1945',
            c: '1918',
            d: '1944'
        },
        correctAnswer: 'b'
    },
    {
        question: "Qual é o único número primo que é par?",
        answers: {
            a: '3',
            b: '7',
            c: '13',
            d: '2'
        },
        correctAnswer: 'd'
    },
    {
        question: "Quantos nomes tinha D. Pedro I?",
        answers: {
            a: '18',
            b: '15',
            c: '20',
            d: '12'
        },
        correctAnswer: 'a'
    }
];

let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;

        for(let i = 0; i < questions.length; i++) {
            answers = [];

            for(letter in questions[i].answers) {
                answers.push( 
                    '<label>'
                    + '<input type="radio" name="question' +i+'" value="'+letter+'">'
                    +questions[i].answers[letter]
                    +'</lebel>' 
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
                );
            }
            quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers');

        let userAnswer = "";
        let numCorrect = 0;

        for(let i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked') || {}).value;

            if(userAnswer === questions[i].correctAnswer) {
                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            } else {
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
    }
    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}