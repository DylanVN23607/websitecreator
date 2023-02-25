let websiteCodeText = document.getElementById("websiteCode")
let website = document.getElementById("website")
let backgroundColor = "white";

const copy = (text)=>{
    navigator.clipboard.writeText(text)
}

const getRadioInputBackground = (input)=>{
    let slicedInput = input.split("")
    slicedInput[0] = slicedInput[0].toUpperCase()
    let finalInput = slicedInput.join("")
    return document.getElementById("selectBackground" + finalInput)
}


function createText() {
    update()
    let newText = document.createElement("h1")
    newText.style.fontSize=document.getElementById("textSizeInput").value
    newText.style.color=document.getElementById("textColor").value
    if (document.getElementById("SelectSansSerif").checked) {
        newText.style.fontFamily="sans-serif"
    } else {
        if (document.getElementById("SelectImpact").checked) {
            newText.style.fontFamily="Impact"
        }

        if (document.getElementById("SelectSegoeUI").checked) {
            newText.style.fontFamily="Segoe UI"
        }
    }
    newText.innerHTML=document.getElementById("NewText").value
    website.appendChild(newText)
    update()
}

function createImage() {
    update()
    let newImg = document.createElement("img")
    newImg.src=document.getElementById("imageSrc").value
    website.appendChild(newImg)
    update()
}


const update = ()=>{
    
    
    if (getRadioInputBackground("red").checked) {
        backgroundColor="red"
    }
    
    if (getRadioInputBackground("blue").checked) {
        backgroundColor="blue"
    }
    if (getRadioInputBackground("gray").checked) {
        backgroundColor="gray"
    }
    if (getRadioInputBackground("black").checked) {
        backgroundColor="black"
    }
    
    if (getRadioInputBackground("white").checked) {
        backgroundColor="white"
    }


    websiteCodeText.value="<body style='background-color: " + backgroundColor +"'>"+website.innerHTML+"</body>"
}

update()
