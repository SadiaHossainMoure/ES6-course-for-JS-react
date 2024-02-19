//ES6 fat arrow with this function
var javascript = {
    name: "Javascript",
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
      //this = {javascript}
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
      },
      };

javascript.printLibraries();