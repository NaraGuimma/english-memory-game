document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'book',
      img: './ìmages/book.PNG'
    },
    {
      name: 'clock',
      img: './ìmages/clock.PNG'
    },
    {
      name: 'colored-pencil',
      img: './ìmages/colored-pencil.PNG'
    },
    {
      name: 'computer',
      img: './ìmages/computer.PNG'
    },
    {
      name: 'crayons',
      img: './ìmages/crayons.PNG'
    },
    {
      name: 'eraser',
      img: './ìmages/eraser.PNG'
    },
    {
      name: 'glue',
      img: './ìmages/glue.PNG'
    },
    {
      name: 'paint-set',
      img: './ìmages/paint-set.PNG'
    },
    {
      name: 'pen',
      img: './ìmages/pen.PNG'
    },
    {
      name: 'pencil-case',
      img: './ìmages/pencil-case.PNG'
    },
    {
      name: 'pupil',
      img: './ìmages/pupil.PNG'
    },
    {
      name: 'school-bus',
      img: './ìmages/school-bus.PNG'
    },
    {
      name: 'school',
      img: './ìmages/school.PNG'
    },
    {
      name: 'schoolbag',
      img: './ìmages/schoolbag.PNG'
    },
    {
      name: 'scissors',
      img: './ìmages/scissors.PNG'
    },
    {
      name: 'teacher',
      img: './ìmages/teacher.PNG'
    },
    {
      name: 'book',
      img: './ìmages/book.PNG'
    },
    {
      name: 'clock',
      img: './ìmages/clock.PNG'
    },
    {
      name: 'colored-pencil',
      img: './ìmages/colored-pencil.PNG'
    },
    {
      name: 'computer',
      img: './ìmages/computer.PNG'
    },
    {
      name: 'crayons',
      img: './ìmages/crayons.PNG'
    },
    {
      name: 'eraser',
      img: './ìmages/eraser.PNG'
    },
    {
      name: 'glue',
      img: './ìmages/glue.PNG'
    },
    {
      name: 'paint-set',
      img: './ìmages/paint-set.PNG'
    },
    {
      name: 'pen',
      img: './ìmages/pen.PNG'
    },
    {
      name: 'pencil-case',
      img: './ìmages/pencil-case.PNG'
    },
    {
      name: 'pupil',
      img: './ìmages/pupil.PNG'
    },
    {
      name: 'school-bus',
      img: './ìmages/school-bus.PNG'
    },
    {
      name: 'school',
      img: './ìmages/school.PNG'
    },
    {
      name: 'schoolbag',
      img: './ìmages/schoolbag.PNG'
    },
    {
      name: 'scissors',
      img: './ìmages/scissors.PNG'
    },
    {
      name: 'teacher',
      img: './ìmages/teacher.PNG'
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
      card.setAttribute('src', './ìmages/blank.PNG');
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
      cards[optionOneId].setAttribute('src', './ìmages/white.png');
      cards[optionTwoId].setAttribute('src', './ìmages/white.png');
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', './ìmages/blank.PNG');
      cards[optionTwoId].setAttribute('src', './ìmages/blank.PNG');
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
      setTimeout(checkForMatch, 500);
    }

  }

  createBoard();

})