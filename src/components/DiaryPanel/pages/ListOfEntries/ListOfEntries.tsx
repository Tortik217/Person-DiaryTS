import {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ListOfEntries() {
  const [value, onChange] = useState(new Date());

  // @ts-ignore
    return <Calendar onChange={onChange} value={value}/>;
}
