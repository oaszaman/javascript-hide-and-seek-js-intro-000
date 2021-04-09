function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target');

}

function increaseRankBy(n) {
var rankIncrease = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < rankIncrease.length; i++){
    rankIncrease[i].innerHTML = ((parseInt(rankIncrease[i].innerHTML)) + n);
  }

}

function deepestChild() {
  var drag = document.getElementById('grand-node').querySelectorAll('div');
  return drag[drag.length-1];
}
