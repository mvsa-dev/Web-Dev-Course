function DNAtoRNA(dna) {
  let rna = dna.toLowerCase().replace("t", "u").toUpperCase();
  return console.log(rna);
}

toRNA("GCAT");
