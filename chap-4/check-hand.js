var wish = require('wish');

function highestCount(values){};
function valuesFromHand(hand){};

function multiplesIn(hand) {
  return highestCount(valuesFromHand(hand));
};

function isPair(hand){
  return multiplesIn(hand) === 2;
};

function valuesFromHand(hand) {
  return hand.map(function(card){
    return card.split('-')[0];
  })
}

function checkHand(hand) {
  // if (hand[0] === '2-H' && hand[1] === '3-C' && hand[2] === '4-D' && hand[3] === '5-H' && hand[4] === '2-C') {
  if (isPair(hand)) {
    return 'pair';
  } else {
    return 'three of a kind';
  }
};

describe('valuesFromHand()', function(){
  it ('returns just the values from a hand', function() {
    var result = valuesFromHand(['2-H','3-C','4-D','5-H','2-C']);
    wish(['2','3','4','5','2'] === ['2','3','4','5','2']);
  })
});


describe('highestCount()', function(){
  it ('returns count of the most common card from array', function() {
    var result = highestCount(['2','4','4','4',2]);
    wish(result === 3);
  })
});

describe('isPair()', function(){
  it('find a pair', function() {
    var result = isPair(['2-H','3-C','4-D','5-H','2-C']);
    wish(result);
  })
});

describe('checkHand()', function(){
  it('handle pairs', function(){
    var result = checkHand(['2-H','3-C','4-D','5-H','2-C']);
    wish(result === 'pair');
    var anotherResult = checkHand(['3-H','3-C','4-D','5-H','2-C']);
    with(anotherResult === 'pair');
  });
  it('handles three of a kink', function(){
    var result = checkHand(['3-H','3-C','3-D','5-H','2-H']);
    wish(result === 'three of a kind');
  });
});