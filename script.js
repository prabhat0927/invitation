/* envelope open */

function openInvite(){

document.querySelector(".envelope-wrapper")
.classList.add("open")

setTimeout(()=>{

document.getElementById("envelope").style.display="none"

document.getElementById("main").style.display="block"

document.getElementById("music").play()

startFireworks()

},1000)

}

/* guest name */

var params=new URLSearchParams(window.location.search)

var guest=params.get("to")

if(guest){

document.getElementById("guest")
.innerHTML="Dear "+guest

}

/* countdown */

var eventDate=new Date("April 25, 2026 18:00:00").getTime()

setInterval(()=>{

var now=new Date().getTime()

var dist=eventDate-now

var d=Math.floor(dist/(1000*60*60*24))

var h=Math.floor((dist%(1000*60*60*24))/(1000*60*60))

var m=Math.floor((dist%(1000*60*60))/(1000*60))

var s=Math.floor((dist%(1000*60))/1000)

document.getElementById("countdown").innerHTML=
d+"d "+h+"h "+m+"m "+s+"s"

},1000)

/* slideshow */

let slides=document.querySelectorAll(".slide")

let index=0

setInterval(()=>{

slides[index].classList.remove("active")

index=(index+1)%slides.length

slides[index].classList.add("active")

},3000)

/* fireworks */

function startFireworks(){

let canvas=document.getElementById("fireworks")

let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth

canvas.height=window.innerHeight

setInterval(()=>{

ctx.fillStyle=
"rgba("+Math.random()*255+","+
Math.random()*255+","+
Math.random()*255+",1)"

ctx.beginPath()

ctx.arc(
Math.random()*canvas.width,
Math.random()*canvas.height,
5,0,Math.PI*2)

ctx.fill()

},100)

}

/* particles */

tsParticles.load("tsparticles",{

particles:{

number:{value:60},

size:{value:3},

move:{enable:true,speed:1},

opacity:{value:0.5}

}

})