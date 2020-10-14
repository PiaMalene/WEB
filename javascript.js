/* Kode skrevet av Aleksander, sist endret 07.09.2020 */

function openMenu() { //Funksjonen åpner menyen på mobil når hamburgeren blir trykket på
    var x = document.getElementById("linker");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function changeMenu(x) { //Funksjonen endrer utseende av hamburgeren etter den er trykket på
    x.classList.toggle("change");
  }