tekst = document.getElementById("tekst"),
addtekst = tekst.nextElementSibling,
esej = document.getElementById("esej"),
author = document.getElementById("author"),
title = document.getElementById("title"),
naslov = document.getElementById("naslov"),
imeprezime = document.getElementById("imeprezime"),
addavtor = imeprezime.nextElementSibling,
addnaslov = naslov.nextElementSibling,
datum = document.getElementById("datum");
adddatum = datum.nextElementSibling;

const months = [
    'јануари',
    'февруари',
    'март',
    'април',
    'мај',
    'јуни',
    'јули',
    'август',
    'септември',
    'октомври',
    'ноември',
    'декември'
  ]

  const days = [
    'Недела',
    'Понеделник',
    'Вторник',
    'Седа',
    'Четврток',
    'Петок',
    'Саботa'
  ]

  addtekst.addEventListener("click", function()
  {
    var d = new Date ();
    var months = ["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"];
    var days = ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"];  
    var mesec = months[d.getMonth()];
    var den = days[d.getDay()];
    
      title.style.display = "block";
      title.innerHTML =
      `<div>
      <h3>${naslov.value}</h3>
      <h6>${den}, ${d.getDate()} ${mesec} ${d.getFullYear()}</h6>
      </div>`;
     naslov.value = "";

     author.style.display = "block";
      author.innerHTML =
      `<div>
      <h6>Автор: ${imeprezime.value}</h6>
      </div>`;
     imeprezime.value = "";

    esej.style.display = "block";
    esej.innerHTML =
        `<div>
        <p>${tekst.value}</p>
        </div>`;
    tekst.value = "";
  });





