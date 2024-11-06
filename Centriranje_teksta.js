function centerAlignText(m, n, text) {
  let lines = [];
  let words = text.split(" ");
  let currentLine = "";

  for (let word of words) {
    if ((currentLine + word).length <= m) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  let alignedText = "";
  for (let line of lines) {
    let spacesToAdd = n - line.length;
    let leftSpaces = Math.floor(spacesToAdd / 2);
    let rightSpaces = spacesToAdd - leftSpaces;
    alignedText +=
      " ".repeat(leftSpaces) + line + " ".repeat(rightSpaces) + "\n";
  }

  return alignedText;
}

let m = 50;
let n = 70;
let text = `DUMP Internship je program edukacije buduće generacije dumpovaca. Kroz šest mjeseci besplatnih predavanja imaš priliku steći nova znanja i vještine u područjima: Programiranja, Marketinga, Dizajna i Multimedije`;

let alignedText = centerAlignText(m, n, text);
console.log(alignedText);
