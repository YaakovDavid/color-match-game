// program state
let userInputColor;
let currentColor;
let score = 0;
let currentColorValDiff;
const colors = [
  {
    colorName: 'Honey Bees',
    r: 251,
    g: 214,
    b: 130
  },
  {
    colorName: 'Magical',
    r: 192,
    g: 175,
    b: 208
  },
  {
    colorName: 'Fireweed',
    r: 123,
    g: 55,
    b: 48
  },
  {
    colorName: 'Cyberspace',
    r: 68,
    g: 72,
    b: 77
  },
  {
    colorName: 'Dirty Martini',
    r: 221,
    g: 208,
    b: 182
  },
  {
    colorName: 'Caviar',
    r: 49,
    g: 48,
    b: 130
  },
  {
    //rgb(43, 67, 130)
    colorName: 'Dress Blues',
    r: 43,
    g: 67,
    b: 130
  },
  {
    colorName: 'Tassel',
    r: 198,
    g: 136,
    b: 74
  },
  {
    // rgb(35, 64, 88)
    colorName: 'Salty Dog',
    r: 35,
    g: 64,
    b: 88
  },
  {
    colorName: 'Forget Me Not',
    r: 113,
    g: 105,
    b: 152
  },
  {
    // rgb(146, 208, 208)
    colorName: 'Jacaranda',
    r: 146,
    g: 208,
    b: 208
  },
  {
    colorName: "Queen Anne's Lace",
    r: 236,
    g: 234,
    b: 213
  },
  {
    colorName: 'Mariner',
    r: 152,
    g: 193,
    b: 203
  },
  {
    //rgb(209, 203, 223)
    colorName: 'Potentially Purple',
    r: 209,
    g: 203,
    b: 223
  },
  {
    //rgb(134, 58, 66);
    colorName: 'Luxurious Red',
    r: 134,
    g: 58,
    b: 66
  },
  {
    //rgb(125, 193, 203)
    colorName: 'Rapture Blue',
    r: 125,
    g: 193,
    b: 203
  },
  {
    colorName: 'Sensitive Tint',
    r: 206,
    g: 201,
    b: 204
  },
  {
    // rgb(227, 228, 225)
    colorName: 'Ice Cube',
    r: 227,
    g: 228,
    b: 225
  },
  {
    //rgb(109, 52, 79)
    colorName: 'Fabulous Grape',
    r: 109,
    g: 52,
    b: 79
  },
  {
    colorName: 'Picnic',
    r: 153,
    g: 194,
    b: 133
  },
  {
    colorName: 'Crewel Tan',
    r: 203,
    g: 185,
    b: 155
  },
  {
    // rgb(122, 145,146)
    colorName: 'Moody Blue',
    r: 122,
    g: 145,
    b: 146
  }
];

// jQuery DOM References
const $totalScore = $('.total-score-amt');
const $colorName = $('.color-name');
const $colorInput = $('#color-picker');
const $submitColorBtn = $('.submit-color-btn');
const $guessColorText = $('.guess-color-text');
const $actualColorText = $('.actual-color-text');
const $colorShowerGuess = $('.color-shower--guess');
const $colorShowerActual = $('.color-shower--actual');
const $nextBtn = $('.next');
const $result = $('.result');

$totalScore.html(score);

// what functions might need
function playRound() {
  currentColor = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];

  $colorName.html(currentColor.colorName);

  $result.hide();
}

playRound();

// what events might we need
$submitColorBtn.click(function () {
  const hexInput = $colorInput.val();

  userInputColor = hexToRgb(hexInput);

  $result.show();
  const actualColorRgb = `rgb(${currentColor.r},${currentColor.g},${currentColor.b})`;
  const guessColorRgb = `rgb(${userInputColor.r},${userInputColor.g},${userInputColor.b})`;

  $guessColorText.html(`You guessed ${guessColorRgb}`);
  $actualColorText.html(`The actual color is  ${actualColorRgb}`);
  $colorShowerActual.css('background', `${actualColorRgb}`);
  $colorShowerGuess.css('background', `${guessColorRgb}`);
});

// sourced from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

$nextBtn.click(function () {
  playRound();
})
