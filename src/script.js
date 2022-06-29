async function returnPuppy() {
    const puppy = fetch("https://api.thedogapi.com/v1/images/search")
    puppy.then(response =>{
        return response.json()
    }).then(respons =>{
        gerarCard(respons, "puppy")
    })
}

async function returnCat() {
    const cat = fetch("https://api.thecatapi.com/v1/images/search")
    cat.then(response =>{
        return response.json()
    }).then(respons =>{
        gerarCard(respons, "cat")
    })
}

function gerarCard(newArray, type){
    const puppy = document.querySelector(".puppy")
    const cat = document.querySelector(".cat")
    const img = document.createElement("img")
    const textArea = document.createElement("textarea")
    const btnLink = document.createElement("button")
    const containerPuppy = document.querySelector(".containerPuppy")
    const containerCat = document.querySelector(".containerCat")

    btnLink.innerText = "copy"
    btnLink.className = "btnLink"
    textArea.innerText = newArray[0].url
    img.src = newArray[0].url

    if (type == "puppy"){
        puppy.innerText = ""
        containerPuppy.innerText = ""
        puppy.insertAdjacentElement("afterbegin", img)
        btnLink.id = "urlPuppy"
        textArea.className = "urlPuppy"
        containerPuppy.append(textArea, btnLink)
    } else{
        cat.innerText = ""
        containerCat.innerText = ""
        cat.insertAdjacentElement("afterbegin", img)
        btnLink.id = "urlCat"
        textArea.className = "urlCat"
        containerCat.append(textArea, btnLink)
    }
}

document.querySelector("body").addEventListener("click", event => {
    if (event.target.id == "btnCat"){
        returnCat()
    } else if (event.target.id == "btnPuppy"){
        returnPuppy()
    }
})

function copyLink(type) {
    const textoCopiado = document.querySelector("."+type);

  textoCopiado.select()
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");

  const btnCopied = document.querySelector("#"+type)
  btnCopied.className = "btnLinkCopied"
  btnCopied.innerText = "copied"
}

document.querySelector("body").addEventListener("click", (event) =>{
    if (event.target.id == "urlCat" || event.target.id == "urlPuppy"){
        copyLink(event.target.id)
    }
})

returnCat()
returnPuppy()