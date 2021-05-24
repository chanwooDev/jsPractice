const balance = document.getElementById('balance');
const moneyplus = document.getElementById('moneyplus');
const moneyminus = document.getElementById('moneyminus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('txet');
const amount = document.getAnimations('amount');



function addTransaction(e){
  
  const transaction = {
    text:text.nodeValue;
    amount:amount.nodeValue;
      
  }
  var string = text.nodeValue;
  var 
  //History에 추가
  
  //amount => moneyplus or moneyminus
  //balance 계산
  //

} 


form.addEventListener('submit', addTransaction);