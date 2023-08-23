let showLetter = "";

// Viser bokstavene man har trykket på i en egen div.
function updateView (){
    document.getElementById('pushedLetters').innerHTML= showLetter;

}

// Henter informasjonen om hvilken bokstav som har blitt trykket på
function letterClicked(wordClicked){
    showLetter+= wordClicked.innerHTML;
    updateView ()
}

// Lager et mellomrom mellom bokstavene
  function spaceBar (wordClicked){
    showLetter+=" ";
    updateView ()
}

// Fjerne siste bokstaven man trykket på.
  function backClick (){

    if(showLetter.length > 0){
        showLetter=showLetter.slice(0, -1);
        updateView ();
    }
    
}

// Fjerner alle bokstavene som er klikket på.
function deleteLetters(){

    if(showLetter.length > 0){
        showLetter=showLetter.slice(0, 0);
        updateView ();
    }
    
}

