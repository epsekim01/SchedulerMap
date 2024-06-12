import "./App.css";

function App() {
  return (
    <>
      <div id="wholePage">
        <div id="topContainer">
          <div id="navBarContainer">
            <div id="titleContainer"></div>
            <div id="userContainer"></div>
          </div>
        </div>
        <div id="leftContainer">
          <div id="eventButtonsContainer"></div>
          <div id="inspectorContainer"></div>
        </div>
        <div id="calendarContainer">
          <ul className="label-grid" id="labelContainer">
            <li className="day-label">Sunday</li>
            <li className="day-label">Monday</li>
            <li className="day-label">Tuesday</li>
            <li className="day-label">Wednesday</li>
            <li className="day-label">Thursday</li>
            <li className="day-label">Friday</li>
            <li className="day-label">Saturday</li>
          </ul>
          <ol className="calendar-grid" id="daysContainer">
            <li className="day">1</li>
            <li className="day">2</li>
            <li className="day">3</li>
            <li className="day">4</li>
            <li className="day">5</li>
            <li className="day">6</li>
            <li className="day">7</li>
            <li className="day">8</li>
            <li className="day">9</li>
            <li className="day">10</li>
            <li className="day">11</li>
            <li className="day">12</li>
            <li className="day">13</li>
            <li className="day">14</li>
            <li className="day">15</li>
            <li className="day">16</li>
            <li className="day">17</li>
            <li className="day">18</li>
            <li className="day">19</li>
            <li className="day">20</li>
            <li className="day">21</li>
            <li className="day">22</li>
            <li className="day">23</li>
            <li className="day">24</li>
            <li className="day">25</li>
            <li className="day">26</li>
            <li className="day">27</li>
            <li className="day">28</li>
            <li className="day">29</li>
            <li className="day">30</li>
            <li className="day">31</li>
            <li className="day">1</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
