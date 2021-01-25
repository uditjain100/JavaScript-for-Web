var franc = require("franc");
var lang = require("langs");

var langCode = franc("Alle menslike wesens word vry"); // => 'afr'

var language = lang.where("3", langCode);
console.log(language);

// console.log(franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট")); // => 'ben'
// console.log(franc("Alle menneske er fødde til fridom")); // => 'nno'

// console.log(franc.all("O Brasil caiu 26 posições"));
