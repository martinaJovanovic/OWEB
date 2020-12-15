var likeCounter = document.getElementsByClassName("like-counter");

window.localStorage.setItem("p1", JSON.stringify(count1));
window.localStorage.setItem("p2", JSON.stringify(count2));
window.localStorage.setItem("p3", JSON.stringify(count3));
window.localStorage.setItem("p4", JSON.stringify(count4));
window.localStorage.setItem("p5", JSON.stringify(count5));

function like (number)
{ 
    var i = number;
    if (typeof(Storage) !== "undefined") {
      if (true) 
      {
        newCount = Number(localStorage.getItem("p" + number)) + 1;
        localStorage.setItem("p" + JSON.stringify(number) , JSON.stringify(newCount));
      }
      else 
      {
        newCount = 1;
        localStorage.setItem("p" + number, JSON.stringify(newCount));
      } 
      likeCounter[i].innerHTML = localStorage.getItem("p" + JSON.stringify(number));
    } 
    
    else 
    {
      likeCounter[i].innerHTML = "Sorry, your browser does not support web storage...";
    }
}