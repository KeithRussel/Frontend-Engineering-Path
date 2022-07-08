// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    // Mutate function should not return as similar to base dna
    mutate() {
      const newBase = returnRandBase();
      let randomInd = Math.floor(Math.random() * 15);

      // Compare dna base object to random base if the same, should return different dna obj
      if (this.dna[randomInd] === newBase) {
        return this.dna[randomInd];
      }

      this.dna[randomInd] = newBase;
      return this.dna;
    },

    compareDNA(newObj) {
      let identicalBases = 0;
      let accuracyResults;

      // Check the initial and new object dna if have similarities the ideaticalBasis variable should increase
      for (i = 0; i < 15; i++) {
        if (this.dna[i] == newObj.dna[i]) {
          identicalBases++;
        }
      }
      // formula to get the percentage of similarity
      accuracyResults = Math.floor((identicalBases / this.dna.length) * 100);
      // Print for initial and new object similarity
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${newObj.specimenNum} have ${accuracyResults}% DNA in common`
      );
    },
    willLikelySurvive() {
      let strongBases = 0;

      // Check the existing C and G in dna array and add to strongBases count
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          strongBases++;
        }
      }

      // Formula for strong bases %
      let strongBasesPercentage = Math.floor((strongBases / 15) * 100);

      console.log(`strongBases ${strongBasesPercentage}%`);
      // Check if strongBases greater than equal to 60
      if (strongBasesPercentage >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const creature = pAequorFactory(1, mockUpStrand());
const creature2 = pAequorFactory(2, mockUpStrand());
console.log(creature.dna);
// console.log(creature.mutate())
console.log(creature2.dna);
console.log(creature.compareDNA(creature2));
console.log(creature.willLikelySurvive());
// console.log(pAequorFactory(1, mockUpStrand))
