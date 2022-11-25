"use strict"; // strict mode to enforce some type safety.

// DOM - Document Object Model
var listItems = document.getElementsByTagName('li');

for(var x = 0; x < listItems.length; x++)
{
    listItems[x].onmouseover = function()
    {
        this.style.backgroundColor=="red";
    }
    listItems[x].onmouseout = function()
    {
        this.style.backgroundColor=="#381F1E";
    }
}