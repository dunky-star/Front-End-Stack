(()=>{"use strict";class o{constructor(o){this.name=o}}const e=[0,1,2,3,4,10,20].filter((o=>o>2));console.log(e);let n;n="Hello Duncacn",console.log("Hello Duncacn");const s=[0,1,2,3,4];s.push(100),console.log(s),["Duncan","John","Pete"].push("Kaligs");const l=[1,"Duncan",10,"Pete"];let c;function r(o,e="en",n){return"en"===e?`Hello ${o}`:(e="es")?`Hola ${o}${n}`:`Yo ${o}!`}l.push(1e3),l.push("Kaligs"),console.log("Hello opiyo"),console.log(34),c=function(o,e){return"en"===e?`Hello ${o}!`:`Hola ${o}!`},console.log(c("Duncan","en")),r("Duncan","!"),console.log(r("Duncan","en","!"));let t=new class extends o{constructor(o){super(o),this.superPowers=[]}addPower(o){this.superPowers.push("power")}listPowers(){return this.superPowers}}("Bruce Lee");function u(o){return o[Math.floor(Math.random()*o.length)]}t.addPower("money"),console.log(t.listPowers);const a=u([...Array(13).keys()]),i=u(["Diamond","Hearts","Clubs","Spades"]);console.log(`Your card is: ${a} ${i}`)})();