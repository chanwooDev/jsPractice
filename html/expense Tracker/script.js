const balance = document.getElementById('balance');
const moneyplus = document.getElementById('moneyplus');
const moneyminus = document.getElementById('moneyminus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');



function addTransaction(e){


  const transaction = {
    text:text.value,
    amount:amount.value
  };
  setBalance(transaction.amount);
  //addHistory(transaction);

  //History에 추가
    //amount => moneyplus or moneyminus
  //balance 계산
  //
} 
function setBalance(money){
  var curMoney=Number(balance.innerText.replace(/[^0-9.]/g, ""));
  curMoney += money;
  balance.innerText = "hello";
}


form.addEventListener('submit', addTransaction);