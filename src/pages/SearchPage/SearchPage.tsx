import Calendar from "react-calendar";
import {useState} from "react";

export const SearchPage = () => {

  const [value, setValue] = useState<Date>(new Date());

  return (
      <Calendar
          onChange={(v) => setValue(v as Date)}
          value={value}
      />
  )
}
