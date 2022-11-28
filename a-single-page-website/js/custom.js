"use strict"; // strict mode to enforce some type safety.

// JavaScript window scroll

var section = document.querySelectorAll('.section');
var sections = {};

section.forEach(function(e){
    sections[e.id] = e.offsetTop;
})


window.onscroll = function(){
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    for (var x in sections){
        if(sections[x] <= scrollPos){
            document.querySelector('.active').setAttribute('class','');
            document.querySelector('a[href*='+x+']').setAttribute('class','active');
        }
    }
}

/*
var sections = {};
section.forEach(function(e){
    console.log(e.id, e.offsetTop);
})

sections[e.id] = e.offsetTop;

window.onscroll = function(){
    console.log('scroll');
}
*/