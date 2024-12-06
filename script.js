function createTable() {
  // Prompt the user for the number of rows and columns
  const rows = parseInt(prompt("Input number of rows"), 10);
  const cols = parseInt(prompt("Input number of columns"), 10);

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing content in the table
  table.innerHTML = "";

  // Create the rows and columns
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(); // Insert a new row
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(); // Insert a new cell
      cell.textContent = `Row-${i} Column-${j}`; // Set the cell content
    }
  }
}
