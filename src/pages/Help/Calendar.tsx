import { useState } from "react";

interface CalendarProps {
  monthsToShow: number;
}
const calendarTabs = [
  {
    name: "Preferences",
    id: 1,
    selected: false,
  },
  {
    name: "People",
    id: 2,
    selected: false,
  },
  {
    name: "Days",
    id: 3,
    selected: true,
  },
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Calendar: React.FC<CalendarProps> = ({ monthsToShow }) => {
  const [toggle, setToggle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const currentDate = new Date();
  const months = [];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Generate the months to display
  for (let i = 0; i < monthsToShow; i++) {
    const monthDate = new Date(currentDate);
    monthDate.setMonth(currentDate.getMonth() + i);
    months.push(monthDate);
  }

  // Function to get days in a month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the starting day of the week for a month
  const getStartDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  return (
    <>
      <div style={calendarContainer}>
        <div style={tabsHeader}>
          <div style={list}>
            {calendarTabs.map((tab) => (
              <span key={tab.id} style={tab.selected ? selected : listItems}>
                {tab.name}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            transform: `scale(${isHovered ? 1.1 : 1})`,
            transition: "transform 0.2s ease-in-out",
            margin: '1rem'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            style={{ fontWeight: "bold", color: "black", textAlign: "start" }}
          >
            Travel for
          </span>
          <div className="calendarSection">
            {/* Specific date and Toggle */}
            <div style={specificDateSection}>
              <span>Specific date</span>
              <span
                style={{ cursor: "pointer", color: "#4e81ee" }}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? "Untoggle" : "Toggle"}
              </span>
            </div>
            {/* Starting Calendar */}
            <div style={calendar}>
              <div style={weekdayStyle}>
                {weekdays.map((weekday, index) => (
                  <div
                  key={index}
                    style={{
                      color: index === 0 ? "red" : "black",
                      ...gridItem,
                    }}
                  >
                    {weekday.slice(0, 1)}
                  </div>
                ))}
              </div>
              <div style={calendarContent}>
                <div style={gridContainer}>
                  {months.map((month, index) => (
                    <>
                      <div key={index} style={gridContainer}>
                        <div style={monthHeader}>
                          {month.toLocaleString("default", { month: "long" })}{" "}
                          {month.getFullYear()}
                        </div>

                        <table>
                          <tbody>
                            {[...Array(6)].map((_, weekIndex) => {
                              if (
                                weekIndex * 7 -
                                  getStartDayOfWeek(
                                    month.getFullYear(),
                                    month.getMonth()
                                  ) +
                                  1 >
                                getDaysInMonth(
                                  month.getFullYear(),
                                  month.getMonth()
                                )
                              ) {
                                return null; // Don't render the 6th row if it's not needed for the current month
                              }
                              return (
                                <tr key={weekIndex}>
                                  {[...Array(7)].map((_, dayIndex) => {
                                    const dayOfMonth =
                                      weekIndex * 7 +
                                      dayIndex -
                                      getStartDayOfWeek(
                                        month.getFullYear(),
                                        month.getMonth()
                                      ) +
                                      1;
                                    return (
                                      <td
                                        key={dayIndex}
                                        style={{
                                          color:
                                            dayIndex === 0 ? "red" : "black",
                                        }}
                                      >
                                        {dayOfMonth > 0 &&
                                        dayOfMonth <=
                                          getDaysInMonth(
                                            month.getFullYear(),
                                            month.getMonth()
                                          )
                                          ? dayOfMonth
                                          : ""}
                                      </td>
                                    );
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={buttonContainer}>
          <button style={applyButton}>Apply</button>
        </div>
      </div>
    </>
  );
};

export default Calendar;

const calendarContainer = {
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  backgroundColor: "white",
  borderRadius: ".5rem",
  padding: "1rem",
  color: "black",
  fontFamily: "ui-serif",
  width: "50%",
  border: "1px solid grey",
};

const tabsHeader = {
  position: "relative",
  height: "2rem",
  width: "100%",
};

const list = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#e3e7f0",
  borderRadius: ".2rem",
  width: "100%",
  position: "absolute",
  top: 0,
  bottom: 0,
};

const listItems = {
  color: "grey",
  listStyle: "none",
  width: "100%",
  padding: ".3rem",
};

const selected = {
  backgroundColor: "white",
  color: "black",
  listStyle: "none",
  width: "100%",
  borderRadius: ".2rem",
  fontWeight: "bold",
  padding: ".4rem",
  marginRight: "1px",
};

const specificDateSection = {
  display: "flex",
  justifyContent: "space-between",
  padding: ".8rem",
};

const calendarContent = {
  height: "52vh",
  width: "100%",
  overflow: "scroll",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
};

const calendar = {
  backgroundColor: "#f2f5fa",
  width: "100%",
  borderRadius: ".4rem",
};

const gridContainer = {
  display: "grid",
  gridTemplateRows: "auto",
};

const gridItem = {
  padding: ".5rem",
};

const weekdayStyle = {
  display: "flex",
  justifyContent: "space-around",
  fontWeight: "bold",
};

const applyButton = {
  backgroundColor: "#111629",
  color: "white",
  borderRadius: ".5rem",
  border: "1px solid red",
  padding: ".5rem",
};

const monthHeader = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#e7ebf4",
  padding: ".5rem",
  margin: ".3rem",
  position: "sticky",
  top: 0,
  zIndex: 4,
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1.5rem",
};
