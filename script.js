console.groupCollapsed('1-ma Funkcija')

// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function personAge(metai) {
    let age = (metai * 7)
    return `${metai} žmogaus metai yra ${age} šuns metai`
}

console.log(personAge(5))
console.log(personAge(10))
console.log(personAge(1))

console.groupEnd()

console.groupCollapsed('2-ma Funkcija')

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function readBooks(amount) {
    let time = Math.floor(365 / amount)
    return `norint perskaityti ${amount} knygų per metus, vienai knygai perskaityti turėsi ${time} dienas `
}

console.log(readBooks(5))
console.log(readBooks(10))
console.log(readBooks(1))


console.groupEnd()

console.groupCollapsed('3-čia Funkcija')

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną parametrą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function day(amount) {
    let weeks = (amount / 7).toFixed(1)
    return `${amount} dienos yra ${weeks} savaitės`
}

console.log(day(5))
console.log(day(35))
console.log(day(1))

console.groupEnd()

console.groupCollapsed('4-a Funkcija')

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną parametrą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function days(amount) {
    let year = (amount / 365).toFixed(2)
    return `${amount} dienos yra ${year} metai`
}

console.log(days(365))
console.log(days(35))
console.log(days(1))

console.groupEnd()

console.groupCollapsed('5-a Funkcija')

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną parametrą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function year(amount) {
    let hours = (amount * 365 * 24)
    return `${amount} metai turi ${hours} valandas`
}

console.log(year(5))
console.log(year(35))
console.log(year(1))


console.groupEnd()

console.groupCollapsed('6-a Funkcija')

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.


function months(quantyti) {
    let hour = (quantyti * 31 * 24)
    return `${quantyti} mėnesiai turi ${hour} valandas`
}

console.log(months(3))
console.log(months(35))
console.log(months(1))

console.groupEnd()

console.groupCollapsed('7-a Funkcija')

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function month(amount) {
    let minutes = (amount * 30 * 24 * 60)
    return `${amount} mėnesiai turi ${minutes} minutes`
}

console.log(month(2))
console.log(month(35))
console.log(month(1))


console.groupEnd()