//variables for date, time and button elements
var date = moment()
console.log(date.toString())
var currentDate = moment().format("MMM Do, YYYY");
var eventSaveButton = $('#buttonEl');
var hrs = []

//for loop creating the times that will go into the table
for (let i=0; i<24; i++) {
  hrs.push(`${i}:00`);
}

var tbody = $("table tbody")

//for loop generating the table rows with time, form and save button
for(let i=0; i<hrs.length; i++) {
  const beforeTime = moment(date).hour(i).isBefore(date)
  const afterTime = moment(date).hour(i).isAfter(date)
  // console.log(i, beforeTime, afterTime)

//interpolated html for table
  const html = $(`<tr>
  <td>${hrs[i]}</td>
    <td>
      <form class="event">
        <input type="text" value="${localStorage.getItem(hrs[i]) || ""}" name="eventName">
        <button class="saveBtn" type="submit">save</button>
      </form>
    </td>
  </tr>`)
  
//add classes to change color dependant on the time of day
  if (beforeTime) {
    html.addClass("grey")}
    else if (afterTime) {
      html.addClass("green")
    }  
    else {
      html.addClass("red")
    }
  
  tbody.append(html)
const form = html.find("form")
form.on("submit", function(event) {
  event.preventDefault()
const eventName = form.find("input").val()
//store event form into local storage
window.localStorage.setItem(hrs[i], eventName)

  // console.log(moment(date).hour(i).isBefore(date))
})
}

$("#currentDay").text(currentDate);
// console.log(currentDate)


//save buttons
eventSaveButton.append(
    '<button class="btn btn-primary">Save</button>'
  ); 

