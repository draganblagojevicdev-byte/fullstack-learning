// JS-005 – Driver Eligibility System

//     Napravi program koji proverava da li vozac
//     ispunjava uslove za zaposlenje.

//     Vozac mora:
//     - Imati najmanje 24 godine.
//     - Imati vozacku dozvolu.
//     - Imati Code 95.
//     - Imati lekarsko uverenje.
//     - Biti dostupan za rad.

//     Ako ispunjava sve navedene uslove,
//     odredi njegov status prema iskustvu:

//     - 5 ili vise godina: Senior Driver
//     - Od 2 do manje od 5 godina: Experienced Driver
//     - Manje od 2 godine: Junior Driver

//     Ako ne ispunjava bilo koji od osnovnih uslova,
//     njegov status je: Driver Rejected.

//     Na kraju ispisi:
//     - Ime vozaca.
//     - Godine starosti.
//     - Godine iskustva.
//     - Status vozaca.

//     Godine starosti i iskustva unesi kao stringove
//     i pretvori ih u brojeve.

//     Koristi logicke operatore i nested if.

//     Uslovi zaposlenja su izmisljeni za vezbu

const driver = "Dragan"
const age = 26
const experience = 2
const hasCode95 = true
const hasLicense = true
const hasMedicalCertificate = true
const isAvailable = true
let status = ""
let newEmploye = ""


if(age >= 24 && hasCode95 && hasLicense && hasMedicalCertificate && isAvailable){
    if(experience >= 5){
        status = "Senior Driver"
    }else if(experience >=2 && experience <5){
        status = "Expirience Driver"
    }else{
        status = "Junior Driver"
    }
    newEmploye = "Accepted"
}else{
    newEmploye = "Rejected"
    status = ""
    
}
console.log(`Driver: ${driver}`);
console.log(`age: ${age}`);
console.log(`Expirience: ${experience}`);
console.log(`Status: ${status}`);
console.log(`New Empolyee is ${newEmploye}`);

