import "./App.css";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";

function App() {
  let dayLabels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayNumbers = [...Array(31).keys()];
  let dayStrings = dayNumbers.map(String);

  return (
    <>
      <div id="wholePage">
        <div id="topContainer">
          <NavBar></NavBar>
        </div>
        <div id="leftContainer">
          <div id="eventButtonsContainer"></div>
          <div id="inspectorContainer"></div>
        </div>
        <div id="calendarContainer">
          <div id="labelContainer">
            <ListGroup
              listClass="label-grid"
              itemClass="day-label"
              items={dayLabels}
            ></ListGroup>
          </div>
          <div id="daysContainer">
            <ListGroup
              listClass="calendar-grid"
              itemClass="day"
              items={dayStrings}
            ></ListGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
