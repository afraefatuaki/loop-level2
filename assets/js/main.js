
// function imageArray2() {
//     let retArray2 = []
//     for (let i = 1; i <= 100; i++) {
//         if (i <= 9) {
//             retArray2.push(`image-00${i}`)
//         } else if (i < 100) {
//             retArray2.push(`image-0${i}`)
//         } else {
//             retArray2.push(`image-${i}`)
//         }
//     }
//     return retArray2
// }
// console.log(imageArray2())

//Lev2_2_js-vertiefung_loops_with_input
let number = document.getElementById('number')
let result = document.getElementById('result')
//**********First option without array ********** */
// function loopMe() {
//     result.innerHTML = `L`
//     for (let i = 0; i < number.value; i++) {
//         result.innerHTML += `O`
//     }
//     result.innerHTML += `P`
// }

function loopMe() {

    let array1 = ["L"]

    for (let i = 0; i < number.value; i++) {
        array1.push("o")

    }
    array1.push("P")

    result.innerHTML = array1.join('')

}