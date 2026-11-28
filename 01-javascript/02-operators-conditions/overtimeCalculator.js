/*
    Ticket: JS-004
    Project: Overtime Salary Calculator

    ULAZNI PODACI:

    hourlyRate = "20"
    workingHours = "200"
    regularHours = 173
    overtimeRate = 25
    monthlyBonus = 200
    taxRate = 30

    ZAHTEVI:

    1. Deklarisi promenljive.
    2. Pretvori stringove u brojeve.
    3. Izracunaj osnovnu platu za sve odradjene sate.
    4. Proveri da li radnik ima prekovremene sate.
    5. Ako ima, izracunaj broj prekovremenih sati
       i dodatak od 25% za svaki prekovremeni sat.
    6. Ako radnik ima 200 ili vise radnih sati,
       dodaj mesecni bonus od 200 EUR.
    7. Izracunaj ukupnu bruto platu.
    8. Izracunaj odbitak od 30%.
    9. Izracunaj neto platu.
    10. Prikazi sve rezultate u konzoli.

    OCEKIVANI REZULTAT:

    Hourly rate: 20 EUR
    Working hours: 200
    Overtime hours: 27
    Base salary: 4000 EUR
    Overtime bonus: 135 EUR
    Monthly bonus: 200 EUR
    Gross salary: 4335 EUR
    Tax deduction: 1300.5 EUR
    Net salary: 3034.5 EUR

    PRAVILA:

    - Koristi const i let gde je potrebno.
    - Koristi camelCase.
    - Koristi Number().
    - Koristi if uslove.
    - Koristi template literals.
    - Nemoj koristiti funkcije ni petlje.

    TESTIRANJE:

    Testiraj program sa 150, 173, 180 i 200 sati.

    Napomena:
    Poreski odbitak i pravila bonusa su
    pojednostavljeni za potrebe vezbe.
*/

// Write your code below:
 const hourlyRate = "20"
 const workingHours = "200"
 const regularHours = 173
 const overtimeRate = 25
 const monthlyBonus = 200
 const taxRate = 30

 const hourly = Number(hourlyRate)
 const hours = Number(workingHours)
 let grosSalary = hours * hourly
 let overTimeHours = 0
 let OverTimeBonus = 0
 if (hours > regularHours){
    overTimeHours = hours - regularHours
    OverTimeBonus = overTimeHours * hourly * overtimeRate / 100
    grosSalary += OverTimeBonus
 }else{
    console.log("Not Enough Hours");
    
 }
 if (hours >= 200){
    grosSalary += monthlyBonus
 }
 const taxDeducation = grosSalary * taxRate / 100
 const netSalary = grosSalary - taxDeducation
console.log(`Overtime Hours : ${overTimeHours}`);
console.log(`OverTimeBouns : ${OverTimeBonus}`);






