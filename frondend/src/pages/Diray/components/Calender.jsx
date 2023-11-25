import { useState } from "react";
import Calendar from "react-calendar";
import "../../../assets/styels/Calendar.css";
// import "react-calendar/dist/Calendar.css";
export default function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="pt-12 hidden lg:block">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
