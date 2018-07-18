var style=require('./style.css');

const greeter=require('./Greeter.js');
document.querySelector("#demo").appendChild(greeter());

const componenter=require('./Component.js');
document.querySelector("#demo").appendChild(componenter());
