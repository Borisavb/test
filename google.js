var gradovi = {
  Kladovo: "Istocna Srbija",
  Kragujevac: "Sumadija",
  Kraljevo: "Sumadija",
  Kikinda: "Vojvodina",
  Kosjeric: "Zapadna Srbija"
};
var json_gradovi = JSON.stringify(gradovi);
console.log(json_gradovi);
localStorage.setItem("cities", json_gradovi);
document.getElementById('search').addEventListener('input', function () {
  var options = localStorage.getItem('cities');
  options_parsed = JSON.parse(options);
  //console.log(options_parsed);
  var lista = document.getElementById('gradovi');
  var opcija = "";
  for (option in options_parsed) {
    opcija += '<option value= ' + option + ' >';
  }
  lista.innerHTML = opcija;
});

document.getElementById('levi').addEventListener('click', function () {
  var grad = document.getElementById('search').value;
  localStorage.setItem('grad', grad);
  window.open('rez_pretrage.html');
});