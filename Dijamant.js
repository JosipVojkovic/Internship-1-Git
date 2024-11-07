const prompt = require("prompt-sync")();

("\n");

const n = Number(prompt("Unesite broj redaka dijamanta: "));

function dijamant(n) {
  let dijamant = "";
  let uklanjanjeZvjezdica = 0;

  for (let redak = 0; redak <= n; redak++) {
    if (redak < Math.floor(n / 2)) {
      for (let stupac = 0; stupac <= n; stupac++) {
        if (stupac === n) {
          dijamant = dijamant + "\n";
        } else if (
          stupac === Math.floor(n / 2) ||
          (stupac >= Math.floor(n / 2) - redak &&
            stupac <= Math.floor(n / 2) + redak)
        ) {
          dijamant = dijamant + "*";
        } else {
          dijamant = dijamant + " ";
        }
      }
    } else {
      for (let stupac = 0; stupac <= n; stupac++) {
        if (stupac === n) {
          dijamant = dijamant + "\n";
        } else if (
          stupac >= uklanjanjeZvjezdica &&
          stupac <= n - 1 - uklanjanjeZvjezdica
        ) {
          dijamant = dijamant + "*";
        } else {
          dijamant = dijamant + " ";
        }
      }
      uklanjanjeZvjezdica++;
    }
  }

  return dijamant;
}

console.log(dijamant(n));
