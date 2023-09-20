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
    let time = ((amount / 12) * 30)
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

function days(amount) {
    let weeks = (amount / 7)
    return `${amount} dienos yra ${weeks} savaitės`
}

console.log(days(5))
console.log(days(35))
console.log(days(1))

console.groupEnd()

console.groupCollapsed('4-a Funkcija')

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną parametrą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function days(amount) {
    let year = (amount / 365)
    return `${amount} dienos yra ${year} metai`
}

console.log(days(365))
console.log(days(35))
console.log(days(1))

console.groupEnd()


// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną parametrą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.