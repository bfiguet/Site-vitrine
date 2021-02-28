/*Dans le modal
- Mettre à jour le titre
- Passer d'un artiste à l'autre
- Animer les images
*/
const listArtiste = [
  { p: "joao", n: "jesus" },
  { p: "klaus", n: "kinski" },
  { p: "binta", n: "fatoumata" },
  { p: "diane", n: "parsa" },
  { p: "pedro", n: "dafonseca" },
  { p: "fatou", n: "traore" },
  { p: "nolwen", n: "lareine" },
  { p: "gisele", n: "monsanto" },
  { p: "maelys", n: "lutin" },
  { p: "hassein", n: "dasilva" },
  { p: "lina", n: "dode" },
  { p: "jean", n: "desmouret" },
  { p: "ken", n: "kashigawa" },
  { p: "anna", n: "pazen" },
];

const tabImg = [
  document.querySelector("#big"),
  document.querySelector("#th1"),
  document.querySelector("#th2"),
  document.querySelector("#th3"),
  document.querySelector("#th4"),
  document.querySelector("#th5"),
];

const cards = document.querySelectorAll(".card");

//Gestion des évènements sur le Modal
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    let currentArtiste = listArtiste[i];
    let index = i;
    setModal(index);
    setImage(index);
  });
}

//Fonction next artist ou previous
const nextPrevious = (i) => {
  document.querySelector("#exampleModal").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id == "suivant") {
      if (i == listArtiste.length - 1) {
        i = 0;
        document.querySelector("#exampleModalLabel").innerText = `${listArtiste[
          i
        ].p.toUpperCase()} ${listArtiste[i].n.toUpperCase()}`;
      } else {
        i++;
        document.querySelector("#exampleModalLabel").innerText = `${listArtiste[
          i
        ].p.toUpperCase()} ${listArtiste[i].n.toUpperCase()}`;
      }
    }
    if (e.target.id == "precedent") {
      console.log(i);
      if (i == 0) {
        i = listArtiste.length - 1;
        document.querySelector("#exampleModalLabel").innerText = `${listArtiste[
          i
        ].p.toUpperCase()} ${listArtiste[i].n.toUpperCase()}`;
      } else {
        i--;
        document.querySelector("#exampleModalLabel").innerText = `${listArtiste[
          i
        ].p.toUpperCase()} ${listArtiste[i].n.toUpperCase()}`;
      }
    }
  });
};

//Mise en place des images
const setImage = (i) => {
  let tabThumb = document.querySelectorAll(".img-thumbnail");
  i++;
  tabImg[0].setAttribute("src", "/images/artiste-0" + "/lg_0" + 1 + ".jpg");
  for (let j = 1; j < tabImg.length; j++) {
    console.log(j);
    console.log(tabImg[j]);
    tabImg[j].setAttribute(
      "src",
      "/images/artiste-0" + "/sm_0" + j + ".jpg"
    );
  }
  for (let k = 1; k < tabImg.length; k++) {
    tabImg[k].addEventListener("click", function () {
      tabImg[0].setAttribute(
        "src",
        "/images/artiste-0" + "/lg_0" + k + ".jpg"
      );
    });
  }
};

//Fonction pour afficher les bonnes infos sur le modal
const setModal = (i) => {
  console.log(listArtiste[i]);
  document.querySelector(
    "#exampleModalLabel"
  ).innerText = `${listArtiste[i].p} ${listArtiste[i].n}`;
  nextPrevious(i);
};
