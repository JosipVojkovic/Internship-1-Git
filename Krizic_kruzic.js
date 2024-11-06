const prompt = require("prompt-sync")();

let ploca = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let trenutniIgrac = "X";

function prikaziPlocu() {
  console.log(`
      ${ploca[0]} | ${ploca[1]} | ${ploca[2]}
      ---------
      ${ploca[3]} | ${ploca[4]} | ${ploca[5]}
      ---------
      ${ploca[6]} | ${ploca[7]} | ${ploca[8]}
    `);
}

function provjeriPobjedu() {
  const pobjednickeKombinacije = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let kombinacija of pobjednickeKombinacije) {
    const [a, b, c] = kombinacija;
    if (ploca[a] === ploca[b] && ploca[b] === ploca[c]) {
      return true;
    }
  }
  return false;
}

function provjeriNerijeseno() {
  return ploca.every((p) => p === "X" || p === "O");
}

function odigrajPotez(polje) {
  if (
    polje < 1 ||
    polje > 9 ||
    ploca[polje - 1] === "X" ||
    ploca[polje - 1] === "O"
  ) {
    console.log("Neispravan potez, pokušajte ponovo.");
    return false;
  }
  ploca[polje - 1] = trenutniIgrac;
  return true;
}

function igraj() {
  while (true) {
    prikaziPlocu();
    const unos = prompt(`Igrač ${trenutniIgrac}, odaberite polje (1-9):`);
    const polje = parseInt(unos, 10);

    if (odigrajPotez(polje)) {
      if (provjeriPobjedu()) {
        prikaziPlocu();
        console.log(`Igrač ${trenutniIgrac} je pobijedio!`);
        break;
      } else if (provjeriNerijeseno()) {
        prikaziPlocu();
        console.log("Neriješeno!");
        break;
      }

      trenutniIgrac = trenutniIgrac === "X" ? "O" : "X";
    }
  }
}

igraj();
