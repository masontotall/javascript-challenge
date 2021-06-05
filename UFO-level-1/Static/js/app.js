// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select("tbody");

// Read and display entire dataset from data.js

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});