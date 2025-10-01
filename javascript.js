alert("Math time :(")
console.log('Here\'s a for loop showing 1...10:\n')
for (let i =0; i < 10; i++) {
    console.log(`${i}\n`)
}

console.log('Here\'s a do-while loop showing 1...10:\n')
let i = 0
do {
    console.log(i + '\n')
    i++
} while (i < 10)

console.log('Here\'s a while loop showing 1...10:\n')
let j = 0
while (j < 10) {
    console.log(`${j}\n`)
    j++
}

console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${ num }\n`)
})

console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
let timesTable= (to) => {
    console.log('Here\'s a times table to ' + to + '\n' )

    if (Number.isInteger(to)) {
        for (let i =1; i <= to; i++) {
            let row = ""
            for (let j =1; j<= to; j++) {
                row += `${ i * j }\t`
            }
            console.log(row)
        }
    }else{
        console.log(`Sorry, ${to} isn't a number!`)
    }
}

timesTable (4)
timesTable (12)
timesTable ()
// code from Tina
function getRowsDesired() {
    // console.log(Number(document.querySelector('.rows input#rows').value))
    // console.log(Number(document.querySelectorAll('.rows input')[0].value))
    console.log(Number(document.getElementById('rows').value))
    return Number(document.getElementById('rows').value);
}

function getColumnsDesired() {
    console.log(Number(document.getElementById('cols').value))
    return Number(document.getElementById('cols').value)
}


function createWithHtmlTable(rows, cols) {
    let string //define a variable called string
    if (rows && cols) { //if rows nd columns were provided
        string = "<table>\n" //start building the HTML table

        for (let row = 1; row <= rows; row++) {
            string += `<tr>\n` //start building HTML row

            for (let col = 1; col <= cols; col++) {
                string += "<td>" //start building a cell
                string += row * col //populate contents of cell
                string += "<td>\n" //complete cell
            }
            string += "</tr>\n" //complete HTML row
        }

        string += "</table>\n"
    } else { //method wasn't provided
        string = 'Provide some inputs' //text "provide some inputs" will show
    }
    document.getElementById("output").innerHTML = string;

}

