document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'book',
      img: './images/book.PNG'
    },
    {
      name: 'clock',
      img: './images/clock.PNG'
    },
    {
      name: 'colored-pencil',
      img: './images/colored-pencil.PNG'
    },
    {
      name: 'computer',
      img: './images/computer.PNG'
    },
    {
      name: 'crayons',
      img: './images/crayons.PNG'
    },
    {
      name: 'eraser',
      img: './images/eraser.PNG'
    },
    {
      name: 'glue',
      img: './images/glue.PNG'
    },
    {
      name: 'paint-set',
      img: './images/paint-set.PNG'
    },
    {
      name: 'pen',
      img: './images/pen.PNG'
    },
    {
      name: 'pencil-case',
      img: './images/pencil-case.PNG'
    },
    {
      name: 'pupil',
      img: './images/pupil.PNG'
    },
    {
      name: 'school-bus',
      img: './images/school-bus.PNG'
    },
    {
      name: 'school',
      img: './images/school.PNG'
    },
    {
      name: 'schoolbag',
      img: './images/schoolbag.PNG'
    },
    {
      name: 'scissors',
      img: './images/scissors.PNG'
    },
    {
      name: 'teacher',
      img: './images/teacher.PNG'
    },
    {
      name: 'book',
      img: './images/book.PNG'
    },
    {
      name: 'clock',
      img: './images/clock.PNG'
    },
    {
      name: 'colored-pencil',
      img: './images/colored-pencil.PNG'
    },
    {
      name: 'computer',
      img: './images/computer.PNG'
    },
    {
      name: 'crayons',
      img: './images/crayons.PNG'
    },
    {
      name: 'eraser',
      img: './images/eraser.PNG'
    },
    {
      name: 'glue',
      img: './images/glue.PNG'
    },
    {
      name: 'paint-set',
      img: './images/paint-set.PNG'
    },
    {
      name: 'pen',
      img: './images/pen.PNG'
    },
    {
      name: 'pencil-case',
      img: './images/pencil-case.PNG'
    },
    {
      name: 'pupil',
      img: './images/pupil.PNG'
    },
    {
      name: 'school-bus',
      img: './images/school-bus.PNG'
    },
    {
      name: 'school',
      img: './images/school.PNG'
    },
    {
      name: 'schoolbag',
      img: './images/schoolbag.PNG'
    },
    {
      name: 'scissors',
      img: './images/scissors.PNG'
    },
    {
      name: 'teacher',
      img: './images/teacher.PNG'
    }
  ]


  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid")
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  var resultDisplay = document.querySelector("#result");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', './images/blank.PNG');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!!!!");
      cards[optionOneId].setAttribute('src', './images/white.png');
      cards[optionTwoId].setAttribute('src', './images/white.png');
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', './images/blank.PNG');
      cards[optionTwoId].setAttribute('src', './images/blank.PNG');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.textContent = 'Congratualtions! You found them all'
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 1000);
    }

  }

  createBoard();

})
