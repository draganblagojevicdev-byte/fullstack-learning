/*
 * TICKET: JS-003
 * TITLE: Employee Data Conversion
 *
 * REQUIREMENTS:
 *
 * 1. Kreiraj sledece varijable:
 *
 *    employeeId = "105"
 *    employeeName = "Marko"
 *    hourlyRate = "20.50"
 *    workingHours = "180"
 *    isEmployed = 1
 *    department = ""
 *
 * 2. Konvertuj employeeId u Number.
 *
 * 3. Konvertuj hourlyRate u Number.
 *
 * 4. Konvertuj workingHours u Number.
 *
 * 5. Konvertuj isEmployed u Boolean.
 *
 * 6. Konvertuj department u Boolean.
 *
 * 7. Izracunaj grossSalary.
 *
 * 8. Konvertuj grossSalary u String.
 *
 * 9. Koristi typeof da proveris tipove
 *    konvertovanih varijabli.
 *
 * 10. Originalne varijable ne menjaj.
 *     Koristi nove varijable za konverzije.
 *
 * BONUS:
 * Objasni zasto department nakon konverzije
 * u Boolean vraca false.
 */

// WRITE YOUR CODE BELOW
 const employeeId = "105"
 const employeeName = "Marko"
 const hourlyRate = "20.50"
 const workingHours = "180"
 const isEmployed = 1
 const department = ""
 const employee  = Number(employeeId)
 typeof(employee)
 const hourlyWage = Number(hourlyRate)
 typeof(hourlyWage)
 const workingTime = Number(workingHours)
 typeof(workingTime)
 const employedBol = Boolean(isEmployed)
 typeof(employedBol)
 const departmentBol = Boolean(department)
 typeof(departmentBol)
 const grossSalary = workingTime * hourlyWage
 const brutoSalary = String(grossSalary)
 typeof(brutoSalary)