var titles = [[],[],[],[],[],[]];
var komentari = document.getElementsByClassName("comment");
var displayKomentari = document.getElementsByClassName("comments");
var commentCounter = document.getElementsByClassName("comment-counter");

function insert (number) {
   var i = number;
   if (komentari[i].value!="")
   {
       titles[i].push(komentari[i].value);
       komentari[i].value = "";
       displayKomentari[i].innerHTML = "";
       displayKomentari[i].innerHTML +=
       `<div>${titles[i].join("<br/> ")}</div>`;
       var numberOfComments = Number(commentCounter[i].textContent);
       numberOfComments++;
       commentCounter[i].textContent = numberOfComments;
       localStorage.setItem("komentari", JSON.stringify(titles));
    }
}