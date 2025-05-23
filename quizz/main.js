document.addEventListener("DOMContentLoaded", function () {
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
});

function showHighScores() {
  alert("Highscore functionaliteit komt hier.");
}

document.querySelectorAll(".answer-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Antwoord gekozen!");
  });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentQuestionIndex = 0;
    

    const questions = [
      {
        question: 'Hoe noem je een Koele koe in een kast?',
        answers: ['Koelkast', 'Koederij', 'Moelast', 'Koederbij'],
        correct: 0, 
      },
      {
        question: 'Wat is de hoofdstad van Nederland?',
        answers: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'],
        correct: 0,
      },
      {
        question: 'Welke planeet staat het dichtst bij de zon?',
        answers: ['Mercurius', 'Venus', 'Aarde', 'Mars'],
        correct: 0,
      },
      {
        question: 'Hoeveel continenten zijn er op aarde?',
        answers: ['7', '6', '8', '5'],
        correct: 0,
      },
      {
        question: 'Wat is het grootste dier ter wereld?',
        answers: ['Blauwe vinvis', 'Olifant', 'Giraffe', 'Witte haai'],
        correct: 0,
      },
      {
        question: 'Wie schilderde de Mona Lisa?',
        answers: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
        correct: 0,
      },
      {
        question: 'Welke taal wordt gesproken in Brazilië?',
        answers: ['Portugees', 'Spaans', 'Frans', 'Engels'],
        correct: 0,
      },
      {
        question: 'Wat is de grootste oceaan ter wereld?',
        answers: ['Stille Oceaan', 'Atlantische Oceaan', 'Indische Oceaan', 'Arctische Oceaan'],
        correct: 0,
      },
      {
        question: 'Wie ontdekte Amerika?',
        answers: ['Christoffel Columbus', 'Marco Polo', 'Ferdinand Magellaan', 'James Cook'],
        correct: 0,
      },
      {
        question: 'Wat is de hoofdstad van Frankrijk?',
        answers: ['Parijs', 'Rome', 'Berlijn', 'Madrid'],
        correct: 0,
      },

      {
        question: 'Wat is de dichtstbijzijnde ster bij de aarde?',
        answers: ['De zon', 'Alpha Centauri', 'Betelgeuze', 'Sirius'],
        correct: 0,
      },
      {
        question: 'Welke planeet wordt de Rode Planeet genoemd?',
        answers: ['Mars', 'Venus', 'Jupiter', 'Saturnus'],
        correct: 0,
      },

    ];
  
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }
  
    function showHighScores() {
      alert('Highscore functionaliteit komt hier.');
    }
  
    function loadQuestion() {
      const question = questions[currentQuestionIndex];
      document.getElementById('question').textContent = question.question;
      const answerButtons = document.querySelectorAll('.answer-btn');
      answerButtons.forEach((btn, index) => {
        btn.textContent = question.answers[index];
        btn.onclick = function () {
          checkAnswer(index);
        };
      });
    }
  
    function checkAnswer(selectedIndex) {
      const question = questions[currentQuestionIndex];
      if (selectedIndex === question.correct) {
        alert('Correct antwoord!');
      } else {
        alert('Fout antwoord!');
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        alert('Quiz is afgelopen!');
      }
    }
  
    loadQuestion(); 
  });
  