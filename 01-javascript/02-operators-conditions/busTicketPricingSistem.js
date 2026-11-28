/*
    ==========================================
    Ticket: JS-006
    Project: Bus Ticket Pricing System
    File: ticketPricing.js
    ==========================================

    Napravi program za obracun cene autobuskih karata.

    ULAZNI PODACI:

    - Ime putnika.
    - Godine starosti.
    - Tip karte.
    - Da li je student.
    - Da li ima invalidsku karticu.
    - Broj putnika.

    CENOVNIK:

    single  = 3 EUR
    day     = 8 EUR
    weekly  = 25 EUR
    monthly = 60 EUR

    PRAVILA ZA POPUST:

    - Mladji od 6 godina: 100%
    - Osobe sa invalidskom karticom: 50%
    - Od 6 do 17 godina: 40%
    - Studenti: 25%
    - Osobe sa 65 ili vise godina: 20%
    - Ostali: 0%

    Popusti se ne sabiraju!
    Primenjuje se prvi ispunjeni uslov
    prema navedenom redosledu.

    STA PROGRAM TREBA DA URADI:

    1. Odredi cenu karte prema tipu karte.
    2. Odredi procenat popusta.
    3. Izracunaj ukupnu cenu svih karata
       bez popusta.
    4. Izracunaj novcani iznos popusta.
    5. Izracunaj konacnu cenu svih karata.

    Ako tip karte ne postoji, ispisi:
    "Invalid ticket type"

    U tom slucaju nemoj izvrsavati obracun.

    NA KRAJU ISPISI:

    - Ime putnika.
    - Godine starosti.
    - Tip karte.
    - Pojedinacnu cenu karte.
    - Broj putnika.
    - Ukupnu cenu bez popusta.
    - Procenat popusta.
    - Novcani iznos popusta.
    - Konacnu cenu.

    PRAVILA:

    - Koristi switch, case, break i default.
    - Koristi if, else if i else.
    - Koristi const i let.
    - Koristi template literals.
    - Bez funkcija i petlji.
    - Svi putnici ostvaruju isti popust.

    Sam biras nazive promenljivih,
    ulazne vrednosti i organizaciju koda.
*/

// Write your code below:
// Passenger 
const name = "Jovan"
const age = 28
const TicketType = "day"
const passengers = 8
const isStudent = true
const hasInvalidCard = false
let ticketPricing = 0
let discount = 0
// TIcket Prices 
const singleDrive = 3
const dayTicket = 8
const weekly = 25
const monthly = 60

// Switch case
switch(TicketType){
    case "day":
        ticketPricing = dayTicket
        break;
    case "single":
        ticketPricing = singleDrive
        break
    case "monthly":
        ticketPricing = monthly
        break
    case "weekly":
        ticketPricing = weekly
        break
    default:
        console.log("Invalid Ticket type");       
}
// Statments
if(ticketPricing !== 0){
    if (age < 6){
        discount = ticketPricing * 100 / 100
    }else if (hasInvalidCard){
        discount = ticketPricing * 50 / 100
    }else if (age >=6 && age <=17){
        discount = ticketPricing * 40 / 100
    }else if (isStudent){
        discount = ticketPricing * 25 / 100
    }else if (age >= 65){
        discount = ticketPricing * 20 / 100
    }else{
    discount = 0
    }
    const priceWithoutDiscount = ticketPricing * passengers
    const discountPrice = passengers * discount
    const finalPrice = priceWithoutDiscount - discountPrice
    const perPassengerDiscount = discount / ticketPricing * 100
    // Logs
    console.log(`Passenger Name: ${name}`);
    console.log(`Passenger age: ${age}`);
    console.log(`Ticket type: ${TicketType}`);
    console.log(`Ticket price: ${ticketPricing}`);
    console.log(`Passenger: ${passengers}`);
    console.log(`Discount Price: ${discountPrice}`);
    console.log(`Price Without Discount: ${priceWithoutDiscount}`);
    console.log(`Price With Discount: ${finalPrice}`);
    console.log(`Price With Discount: ${perPassengerDiscount}`);



}



