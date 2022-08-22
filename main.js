//Container
const $generatorCheck = document.querySelector('.generator__check')
//Lenth Range Value
const $rangeLine = document.querySelector('.range__line')
const $gn__par__value = document.querySelector('.gn__par__value')
//Buttons
const $btn__generator__copy = document.querySelector('.generator__copy')
const $btn__generator__render = document.querySelector('.generator__render')
//Generator Settings
const $settingsUpper = document.querySelector('.settings__upper')
const $settingsLower = document.querySelector('.settings__lower')
const $settingsNumbers = document.querySelector('.settings__numbers')
const $settingsSymbols = document.querySelector('.settings__symbols')
const upp = "ABCDEFGHEIJKLMNOPQRSTUVWXYZ"
const low = "abcdefgheijklmnopqrstuvwxyz"
const numb = "1234567890"
const symbol = "!@#$%^&*()?<>~:"
const objInputs =[{
    element: $settingsUpper,
    symbols:"ABCDEFGHEIJKLMNOPQRSTUVWXYZ"
},{
    element: $settingsLower,
    symbols: "abcdefgheijklmnopqrstuvwxyz"
},{
    element: $settingsNumbers,
    symbols: "1234567890"
},{
    element: $settingsSymbols,
    symbols: "!@#$%^&*()?<>~:"
}]
function joinArray(){
    let pswChange = []
    objInputs.forEach(item =>{
       if (item.element.checked){
           pswChange = [...pswChange , ...item.symbols]
       }
    })
    return pswChange[Math.floor(Math.random() * pswChange.length)]
}
function reconstruct() {
    objInputs.forEach((input, index) => {
        const inputsCopy = objInputs.filter((secondInput) => {
            return secondInput.element.checked
        });
        input.element.disabled = input.element.checked && inputsCopy.length === 1;
    })
}
objInputs.forEach(item => {
    item.element.addEventListener("input", () => {
        reconstruct()
    })
})
$btn__generator__render.addEventListener("click", () => {
    let changeRand = "";
    for (let i = 0; i < $rangeLine.value; i++) {
        changeRand += joinArray()
    }
    $generatorCheck.textContent = changeRand
})
$gn__par__value.textContent = $rangeLine.value
$rangeLine.oninput = (() => {
    $gn__par__value.textContent = $rangeLine.value
})
$btn__generator__copy.addEventListener("click", () => {
    console.log($generatorCheck.textContent)
    navigator.clipboard.writeText($generatorCheck.textContent)
})














