"use strict"; // strict mode to enforce some type safety.

// DOM - Document Object Model
var listItems = document.getElementsByTagName('li');

console.dir(listItems[4]);

for(var x; x < listItems.length; x++)
{
    listItems[x].onmouseover = function()
    {
        this.style.backgroundColor="red";
    }
    listItems[x].onmouseout = function()
    {
        this.style.backgroundColor="#381F1E";
    }
}