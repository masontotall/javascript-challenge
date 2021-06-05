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


// Specify the filter button

var filter = d3.select("#filter-btn");


//create a function that runs and filters by date when the filter button is clicked

filter.on("click", function() {
    
    d3.select("tbody").html("");
    

    // read the input

    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    
    // Filter the data set for the input

    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);

    
    // Display Results

    filteredData.forEach((report) => {
        var row = tbody.append('tr');
    
        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);

            var cell = row.append('td');
            cell.text(value);
        });
    });
    
    });