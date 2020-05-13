// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");


function addTable(data) {
  d3.select("tbody").html("");
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach((value) => {
      var tableData = row.append("td");
      tableData.text(value);
    });
  })
};

addTable(tableData);



// select the button and form
var button = d3.select("#filter-btn");
// create event handlers
button.on("click", runEnter);



// Event handler function
function runEnter() {
    d3.event.preventDefault();

    //select input element and property value
    var inputValue = d3.select("#datetime").property("value");

    //filter the data
    var  filteredData = tableData;

    if (inputValue) {
      filteredData = filteredData.filter((row) => row.datetime === inputValue);
    }
    addTable(filteredData);
}
