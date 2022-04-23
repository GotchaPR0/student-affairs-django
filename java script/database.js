class student {
    constructor(
      ID,
      name,
      date,
      gpa,
      gender,
      level,
      departement,
      Email,
      mobile,
      status
    ) {
      this.data = [
        ID,
        name,
        date,
        gpa,
        gender,
        level,
        departement,
        Email,
        mobile,
        status,
      ];
    }
  }
  var dummyData = [];
  dummyData[0] = new student(20200, "ahmed mohamed", "10-5-2000", 4, "male", 1, "computer science", "ahmed@", "00000000", true);
  dummyData[1] = new student(20200, "mohamed", "10-5-2000", 4, "male", 1, "computer science", "mohamed@", "00000000", true);
  dummyData[2] = new student(20200, "sherif", "10-5-2000", 4, "male", 1, "computer science", "sherif@", "00000000", false);

  /*----------------------------------------------------------------------------Search-Student--------------------------------------------------------------------------*/
const names = [];
const IDs = []
const dates = []
const rows = []
for (var i = 0, j = i + 1; i < dummyData.length; i++, j++) {
  names[i] = dummyData[i].data[1]
  IDs[i] = dummyData[i].data[0]
  dates[i] = dummyData[i].data[2]
  var row = document.createElement("tr")
  row.setAttribute("id", `row${j + 1}`)
  rows[i] = row
}

for (var i = 0; i < dummyData.length; i++) {
  var tabledata_n = document.createElement("td")
  tabledata_n.innerHTML = names[i]
  rows[i].appendChild(tabledata_n)
  var tabledata_ID = document.createElement("td")
  tabledata_ID.innerHTML = IDs[i]
  rows[i].appendChild(tabledata_ID)
  var tabledata_date = document.createElement("td")
  tabledata_date.innerHTML = dates[i]
  rows[i].appendChild(tabledata_date)
  document.querySelector("#SS-tbody").appendChild(rows[i])
}
document.getElementById("row1").style.display = "none";
document.getElementById("row2").style.display = "none";
document.getElementById("row3").style.display = "none";
document.getElementById("row4").style.display = "none";
function alert_empty()
{
  alert("Please enter a name")
}
function alert_no_s()
{
  alert("the student you searched about does not exist")
}

function show() {


  var nameinput = document.querySelector("#name-entered").value;
  switch (nameinput.toLowerCase()) {
    case names[0].toLowerCase():
      document.getElementById("row1").style.display = "table-row";
      document.getElementById("row2").style.display = "table-row";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      break;
    case names[1].toLowerCase():
      document.getElementById("row1").style.display = "table-row";
      document.getElementById("row3").style.display = "table-row";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row4").style.display = "none";
      break;
    case names[2].toLowerCase():
      document.getElementById("row1").style.display = "table-row";
      document.getElementById("row4").style.display = "table-row";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      break;
    case "":
      document.getElementById("row1").style.display = "none";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      alert_empty()
      break;
    default:
      document.getElementById("row1").style.display = "none";
      document.getElementById("row2").style.display = "none";
      document.getElementById("row3").style.display = "none";
      document.getElementById("row4").style.display = "none";
      alert_no_s()
  }
}