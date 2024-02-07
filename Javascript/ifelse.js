let select=document.querySelector("select");
let para=document.querySelector("p");
select.addEventListener("change",setLanguage);
function setLanguage(){
    const choice=select.value;
    if(choice==="English"){
        para.textContent="English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England";

    }
    else if(choice==="German"){
        para.textContent="German language, official language of both Germany and Austria and one of the official languages of Switzerland.";
    }
    else if(choice==="French"){
        para.textContent="French language, probably the most internationally significant Romance language in the world. French language distribution.";

    }
    else if(choice==="Tamil"){
        para.textContent="Tamil is a Dravidian language natively spoken by the Tamil people of South Asia. Tamil is an official language of the Indian state of Tamil Nadu";

    }
    else{
        para.textContent="Japanese is the principal language of the Japonic language family spoken by the Japanese people";
    }

}


