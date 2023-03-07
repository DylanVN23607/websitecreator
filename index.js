let websiteCodeText = document.getElementById("websiteCode")
let website = document.getElementById("website")
let backgroundColor = "white";

let elements = []
let elementsIds = []
let elementDeleterButtons = []

let elementDiv = document.getElementById("elements")

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
    let randomID = getRandomId()
    update("text",randomID)
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
    newText.id=randomID
    website.appendChild(newText)
    update()
}

function createImage() {
    let randomID = getRandomId()
    update("image",randomID)
    let newImg = document.createElement("img")
    newImg.src=document.getElementById("imageSrc").value
    newImg.id=randomID
    website.appendChild(newImg)
    update()
}

const getRandomId=()=>{
    let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","o","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0]
    let i = 0;
    let finalID = "";

    while(i<=      10  /*  <--- Length of ID goes here*/                                        -1) {
        finalID+=chars[Math.floor(Math.random()*chars.length)]
        i++
    }

    return finalID;
}


const update = (added,id)=>{
    
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

    if (added!=undefined) {
            elementsIds.push(id)

        if (added=="text") {
            elements.push("Text")
        } else {
            if (added=="image") {
                elements.push("Image")
                }
        }

        elements.forEach((elem)=>{
            let whatAmI = elem
            console.log(whatAmI)
            console.log(elem)

            let newElemDeleter = document.createElement("button")
            if (!elementDeleterButtons.includes(elements.length)) {
            elementDeleterButtons.push(elements.length)
            newElemDeleter.innerHTML=elements.length
        }

        let gonnaAppend = true;
        if (newElemDeleter.innerHTML=="") {
            console.log("GHOST")
            gonnaAppend=false
        }

            newElemDeleter.addEventListener("click",()=>{
                if (document.getElementById(id)!=null) {
                    document.getElementById(id).remove()
            }
                delete elements[elementsIds.indexOf(id)]
                delete elementsIds[elementsIds.indexOf(id)]
                newElemDeleter.remove()
                update()
            })

            if (gonnaAppend) {
                newElemDeleter.innerHTML=elements[parseInt(newElemDeleter.innerHTML)-1]
                elementDiv.appendChild(newElemDeleter)
            }
            return
            
        })
    }
}

update()
