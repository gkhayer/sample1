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

const calendarContainer =
  "flex flex-col justify-start bg-white rounded-md p-4 text-black font-serif w-1/2 border border-gray-500";
const tabsHeader = "relative h-8 w-full";
const list =
  `flex justify-around items-center bg-[#e3e7f0] rounded-sm w-full absolute inset-y-0`

const listItems ="text-gray-500 list-none w-full p-1.5"

const selected = "bg-white text-black list-none w-full rounded-sm font-bold p-1.5 mr-px"

const specificDateSection = "flex justify-between p-2"

const calendarContent = "h-[52vh] w-full overflow-scroll scroll-smooth scrollbar-hide"

const calendar = "bg-[#f2f5fa] w-full rounded-md"

const gridContainer = "grid grid-rows-[auto]"

const weekdayclassName = "flex justify-around font-bold"

const applyButton = `bg-[#111629] text-white rounded-md border border-red-500 p-2`

const monthHeader = `flex justify-between bg-[#e7ebf4] p-2 m-1 relative top-0 z-10`

const buttonContainer = "flex justify-center mt-6"

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
      <div className={calendarContainer}>
        <div className={tabsHeader}>
          <div className={list}>
            {calendarTabs.map((tab) => (
              <span key={tab.id} className={tab.selected ? selected : listItems}>
                {tab.name}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            transform: `scale(${isHovered ? 1.1 : 1})`,
            transition: "transform 0.2s ease-in-out",
            margin: "1rem",
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
            <div className={specificDateSection}>
              <span>Specific date</span>
              <span
                style={{ cursor: "pointer", color: "#4e81ee" }}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? "Untoggle" : "Toggle"}
              </span>
            </div>
            {/* Starting Calendar */}
            <div className={calendar}>
              <div className={weekdayclassName}>
                {weekdays.map((weekday, index) => (
                  <div
                    key={index}
                    style={{
                      color: index === 0 ? "red" : "black",
                       padding: ".5rem"
                    }}
                  >
                    {weekday.slice(0, 1)}
                  </div>
                ))}
              </div>
              <div className={calendarContent}>
                <div className={gridContainer}>
                  {months.map((month, index) => (
                    <>
                      <div key={index} className={gridContainer}>
                        <div className={monthHeader}>
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
        <div className={buttonContainer}>
          <button className={applyButton}>Apply</button>
        </div>
      </div>
    </>
  );
};

export default Calendar;
