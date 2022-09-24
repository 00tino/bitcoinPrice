var button = document.querySelector("#btn");
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var currency = "USD";
// var price = data.bpi[currency].rate;
// var currentPrice =   currentPrice.innerText = price + " " + currency;
window.onload = getPrice();
function getPrice() {
    fetch(url)
      .then(function(promise) {
        return promise.json();
      })
      .then(function(data) {
        var price = data.bpi[currency].rate;
        currentPrice.innerText = price + ` ${currency}`;
      });
}
 btn.addEventListener("click", function(){
   getPrice();
 });
  