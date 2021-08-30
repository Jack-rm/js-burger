let prezzoBasePanino = 50;
let listaCoupon = ["123FANTECAVALLO","123COUPON","123BURGER","SUPERGIGACOUPON"]

let userPanino = document.getElementById("nome_panino");
// console.log(userPanino);

let bottone = document.getElementById("bottone_panino");
// console.log(bottone);

bottone.addEventListener('click',
function() {
    if (userPanino.value.length === 0) {
        alert("Inserisci un nome per la prenotazione!");
    } else {
        let prezzoBasePanino = 50;  // ripeto prezzo base per evitare che ogni iterazione si sommi alla precedente
        let ingredientiScelti = document.getElementsByClassName("ingredient_check");
        // console.log(ingredientiScelti);

        for ( let i= 0; i < ingredientiScelti.length ; i++){
            let ingredienteSelezionato = ingredientiScelti[i];
            // console.log(ingredienteSelezionato);

            if (ingredienteSelezionato.checked){
                prezzoBasePanino += 2.5;
            }
        }

        let coupon = document.getElementById("coupon");

        if (coupon.value.length > 0){
            if (listaCoupon.includes(coupon.value)){
                prezzoBasePanino *= 0.8;
            }
        }   else{
            console.log("Inserisci un coupon valido!");
        }
        console.log(prezzoBasePanino);

        let prezzoFinale = document.getElementById("price");
        prezzoFinale.innerHTML = "&euro; " + prezzoBasePanino;

    }
});

