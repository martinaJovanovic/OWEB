var loveCounter = document.getElementsByClassName("love-counter");

window.localStorage.setItem("l1", JSON.stringify(count1));
window.localStorage.setItem("l2", JSON.stringify(count2));
window.localStorage.setItem("l3", JSON.stringify(count3));
window.localStorage.setItem("l4", JSON.stringify(count4));
window.localStorage.setItem("l5", JSON.stringify(count5));

function heart (number)
{ 
    var i = number;
    if (typeof(Storage) !== "undefined") {
      if (true) 
      {
        newCount = Number(localStorage.getItem("l" + number)) + 1;
        localStorage.setItem("l" + JSON.stringify(number) , JSON.stringify(newCount));
      }
      else 
      {
        newCount = 1;
        localStorage.setItem("l" + number, JSON.stringify(newCount));
      } 
      loveCounter[i].innerHTML = localStorage.getItem("l" + JSON.stringify(number)); 
    } 
    
    else 
    {
      loveCounter[i].innerHTML = "Sorry, your browser does not support web storage...";
    }
}