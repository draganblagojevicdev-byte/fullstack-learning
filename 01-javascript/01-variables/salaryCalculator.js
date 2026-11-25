/*
    Ticket: JS-002
    Project: Salary Calculator

    ULAZNI PODACI:
    hourlyRate = "20"
    workingHours = "173"
    bonus = "200"
    taxRate = 30

    ZAHTEVI:

    1. Deklarisi promenljive.
    2. Pretvori stringove u brojeve koristeci Number().
    3. Izracunaj osnovnu bruto platu (baseSalary).
    4. Dodaj mesecni bonus na osnovnu platu (grossSalary).
    5. Izracunaj odbitak od 30% (taxDeduction).
    6. Izracunaj neto platu (netSalary).
    7. Prikazi sve rezultate u konzoli.

    OCEKIVANI REZULTAT:

    Hourly rate: 20 EUR
    Working hours: 173
    Base salary: 3460 EUR
    Bonus: 200 EUR
    Gross salary: 3660 EUR
    Tax deduction: 1098 EUR
    Net salary: 2562 EUR

    PRAVILA:
    - Koristi const.
    - Koristi camelCase.
    - Koristi Number() za konverziju.
    - Koristi template literals.
    - Nemoj koristiti if/else.
    - Nemoj koristiti funkcije.

    Napomena: Odbitak od 30% je samo za potrebe vezbe.
*/

// Write your code below:
const hourlyRate = "20";
const workingHours = "173";
const bonus = "200";
const taxRate = 30;
const hourlyWage = Number(hourlyRate)
const workingTime = Number(workingHours)
const bonusPrice = Number(bonus)
const baseSalary = workingTime * hourlyWage
const grossSalary = baseSalary + bonusPrice
const taxDeduction = (grossSalary * taxRate) / 100
const netoSalary = grossSalary - taxDeduction
