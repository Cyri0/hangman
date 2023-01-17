let buttonHolder = document.getElementById("right-wrapper")
let letters = "AÁBCDEÉFGHIÍJKLMNOÓPQRSTVWXYZ"
let word = "ALMALÉ"

let mistake = 0

// Betű gombok elhelyezése
for(let i = 0; i < letters.length; i += 1){
    buttonHolder.innerHTML += '<button onclick="letterButtonClicked(this)">'+letters[i]+'</button>'
}

// Annyi alsó vonal, ahány karakter a kitalálandó szó.
for(let i=0; i < word.length;i++){
    document.getElementById("status").innerText += '_'
}

function letterButtonClicked(button){
    button.disabled = true

    // TODO betű tesztelése

    let letter = button.innerText // Melyik betűt vizsgáljuk?

    if(word.includes(letter)){
        alert("Benne van!")
        let actual = document.getElementById("status").innerText
        let newStatus = ""

        for(let i = 0; i < word.length; i++){
            if(word[i] == letter){
                newStatus += letter
            }else{
                newStatus += actual[i]
            }
        }
        document.getElementById("status").innerText = newStatus

    }else{
        mistake += 1
        alert("Nincs benne! " + mistake + " hiba!")
    }
}