let select=document.querySelector("select");
let para=document.querySelector("p");
select.addEventListener("change",setLanguage);
function setLanguage(){
    const choice=select.value;
    switch(choice){
        case "English":
            para.textContent="English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England";
            break;

        case "German":
            para.textContent="German language, official language of both Germany and Austria and one of the official languages of Switzerland.";
            break;
        
        case "French":
            para.textContent="French language, probably the most internationally significant Romance language in the world. French language distribution.";
            break;

        case "Tamil":
            para.textContent="Tamil is a Dravidian language natively spoken by the Tamil people of South Asia. Tamil is an official language of the Indian state of Tamil Nadu";
            break;

        case "Japanese":
            para.textContent="Japanese is the principal language of the Japonic language family spoken by the Japanese people";
            break;

        default:
            para.textContent=" ";
    }

}
