import React from 'react'
import './CalendarItem.css'

export default function CalendarItem({calendarItemStyle, childrenStyles, date, day}) {
  return (
    <div className={calendarItemStyle.concat(" calendar-item")}>
        <h3 className={childrenStyles.concat(" text-lg font-semibold")}>{date}</h3>
        <h5 className={childrenStyles.concat(" text-xs font-normal capitalize")}>{day}</h5>
    </div>
  )
}
