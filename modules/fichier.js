const monmodule = require('./monmodule');

monmodule.direBonjour();
monmodule.direAurevoir();


const markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));