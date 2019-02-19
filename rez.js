var pretraga = localStorage.getItem('grad');
console.log(pretraga);
var info = localStorage.getItem('cities');
var info_parsed = JSON.parse(info);
var sadrzaj;
for (i in info_parsed) {
  if (i == pretraga) {
    //dohvacen element
    sadrzaj = info_parsed[i];
    // console.log(info_parsed[i]);
  }
}
document.getElementById('rez').innerHTML = sadrzaj;

function kreiraj_rezultate(naslov, pasus, link) {
  var omotac = document.getElementById('rezultati');
  var naslov1 = document.createElement('h3');
  naslov1.innerHTML = naslov;
  var p = document.createElement('p');
  p.innerHTML = pasus;
  var link1 = document.createElement('a');
  link1.setAttribute('href', link);
  link1.innerHTML = link;
  omotac.appendChild(naslov1);
  omotac.appendChild(p);
  omotac.appendChild(link1);
}
kreiraj_rezultate("Kragujevac", "neki pasus o kragujevcu", "link");