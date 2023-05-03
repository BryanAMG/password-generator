
const pass = document.querySelector('.result')
const copy = document.querySelector('.copy')
const cantidad = document.getElementById('cantidad')
const mayusculas = document.getElementById('mayusculas')
const minusculas = document.getElementById('minusculas')
const numeros = document.getElementById('numeros')
const simbolos = document.getElementById('simbolos')
const generate = document.querySelector('.cta')

cantidad.value = 20

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = upper.toLowerCase()
const numbers = '0123456789'
const symbols = '!"#$%&/()=?¡}{+-*'

generate.addEventListener('click', () => {
    let password = ''
    let characters = ''

    if (mayusculas.checked) characters += upper
    if (minusculas.checked) characters += lower
    if (numeros.checked) characters += numbers
    if (simbolos.checked) characters += symbols
    const charactersLength = characters.length
    if (!characters) return;
    for (let i = 0; i < cantidad.value; i++) {
        password += characters[Math.floor(Math.random() * charactersLength)]
        // password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    pass.innerHTML = password
})

copy.addEventListener('click', () => {
    const password = pass.textContent
    if (!password) return;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(password).then(() => {
            VanillaToasts.create({
                title: 'Passowrd copiado',
                text: 'Este mensaje desaparecera dentro de 5 segundos ',
                type: 'info', // success, info, warning, error   / optional parameter
                icon: '/public/password.ico', // optional parameter
                timeout: 5000
            });
        })
    } else {
        console.log('Browser Not compatible')
    }

})