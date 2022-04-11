const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: "9 million",
  neighbours: ["Lebanon", "Jordan", "Egypt"],
  describe() {
    const { country, capital, language, population, neighbours } = this;
    // console.log(`${country} has ${population} people, their mother tongue is ${language}, they
    // have ${neighbours.length} neighbouring countries and a capital called ${capital}`);
    return `${country} has ${population} people, their mother tongue is ${language}, they 
     have ${neighbours.length} neighbouring countries and a capital called ${capital}`;
  },
  checkIsland() {
    this.isIsland = this.neighbours.length;
    return myCountry ['isIsland'] === 0 ? `island coustry: ${true}` : `island country: ${false}`;

    //   const describe = this.describe();
    //   console.log(`${describe}`);
  }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
