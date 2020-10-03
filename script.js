let back = document.getElementById("back")

let rainbow = document.getElementById("rainbow")

let restart = document.getElementById("restart")
const colors = ["Red", "Orange", "Salmon", "purple", "Green", "blue", "yellow", "magenta", "aqua", "cyan", "Chartreuse", "CornflowerBlue", "Crimson", "pink", "tomato", "DarkOrchid", "DarkMagenta", "DarkSlateBlue", "DarkOrange", "DarkSalmon", "DarkViolet", "DeepPink", "DodgerBlue", "ForestGreen", "Gold", "Indigo", "LightSeaGreen", "Lime", "MediumSpringGreen", "MidnightBlue", "Navy", "OrangeRed", "Plum", "RebeccaPurple", "PowderBlue", "YellowGreen", "Turquoise", "Teal", "Thistle", "SteelBlue", "Snow", "PaleVioletRed", ]

const colorPicker = Math.floor(Math.random()*40)
back.addEventListener("click", backgroun)


document.getElementById("poland").loop = true;
function backgroun(){
    
rainbow.style.display = "block"
document.getElementById("cow").style.display = "block"
document.getElementById("push").style.display = "none"
document.getElementById("grad").style.display = "none"
    poland.play()
    poland.loop()
    poland.volume=0.4
    
}