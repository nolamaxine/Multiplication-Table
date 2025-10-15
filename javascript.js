// function getRowsDesired() {
//     return Number(document.getElementById("rows").value)
// }
//
// function getColumnsDesired() {
//     return Number(document.getElementById("cols").value)
// }
//
// function getHighlightValue() {
//     let highlightValue = document.getElementById("highlight").value
//
//     if (highlightValue !== '') {
//         return Number(highlightValue)
//     }
// }
//
//
// function createWithHtmlTable(rows, cols, highlight) { // method declaration, has two parameters
//     let string // define a variable called string
//     if (rows && cols) { // if rows and columns were provided
//         string = "<table>\n" // start building the HTML table
//
//         // first "for" loop to build the rows of the table
//         for (let row = 1; row <= rows; row++) {
//
//             if (highlight && highlight === row) {
//                 // if highlight "IS TRUTHY" and its value matches the row
//                 // we're on, then do this next
//                 string += "<tr class='highlight'>\n"
//             } else {
//                 // otherwise just start a regular HTML row with no class
//                 string += "<tr>\n" // start building an HTML row
//             }
//
//             // second "for" loop to build the columns of EACH row
//             for (let col = 1; col <= cols; col++) {
//
//                 if (highlight && highlight === col) {
//                     string += "<td class='highlight'>\n"
//                 } else {
//                     string += "<td>" // start building a single "cell" or column in the HTML row
//                 }
//
//
//                 string += row * col // populate the contents of the HTML cell
//                 string += "</td>\n" // complete the HTML cell
//             }
//             string += "</tr>\n" // complete the HTML row
//         }
//
//         string += "</table>\n" // complete the HTML table
//     } else { // I guess the method wasn't provided either rows or columns
//         string = 'Provide some inputs' // set value of "string" variable to "Provide some inputs"
//     }
//
//     document.querySelector("section.container > section#output").innerHTML = string
//     // document.getElementById("output").innerHTML = string; // WRITE the string we've just built to an element
//     // in the HTML document whose ID is "output"
// }

// function getRowsDesired() {
//     return parseInt(document.getElementById("rows").value);
// }
//
// function getColumnsDesired() {
//     return parseInt(document.getElementById("columns").value);
// }
//
// function createWithFlexbox(rows, columns) {
//     let string = ''
//
//     let row = 1
//     do {
//         string += "<div class='row'>";
//         string += row
//
//         let col = 1
//         do {
//             string += "<div class='col'>";
//             string += row * col
//             string += '</div>'
//
//
//             col = col + 1
//         } while (row <= rows)
//
//     }
// }

function getRowsDesired() {
    return parseInt(document.getElementById("rows").value)
}

function getColumnsDesired() {
    return parseInt(document.getElementById("cols").value)
}

function createWithFlexbox(rows, cols) {
    let string = ''

    // first do-while loop to build the flex'd rows
    let row = 1
    do {
        string += "<div class='row'>"
        string += row

        // second do-while loop to build the flex'd columns
        let col = 1
        do {
            string += "<div class='col'>"
            string += row * col
            string += "</div>"

            col = col + 1
        } while (col <= cols)
        string += "</div>\n"

        row = row + 1;
    } while (row <= rows)

    document.getElementById("output").innerHTML = string
}