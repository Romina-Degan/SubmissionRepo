/* eslint-disable prettier/prettier */
import { useState } from "react";
import { title } from "../../styles/elements/typography";
import { MarkedDates } from "./TimetableFunctions";
const today = new Date();
today.setDate(today.getDate() + 1);
//yourDate.setDate(yourDate.getDate() + 1);
const tomorrow = today.toISOString().split('T')[0];
console.log(tomorrow);

function addDays(date: Date, days: number): String{
    let result = new Date(date);
    result.setDate(date.getDate() + days);
    let stringResult = result.toISOString().split('T')[0];
    return stringResult;
}
export const agendaTasks = [
    {
        title: addDays(today,1),
        data: [{ hour: '12am', duration: '1h', title: 'Hoover Something' }],
    },
    {
        title: addDays(today,2),
        data: [{ hour: '6pm', duration: '30m', title: 'Other Chore' },
            { hour: '6:30pm', duration: '1hr', title: 'Dust Ceiling' },
            {hour: '3pm', duration:'2hr', title:'Take Trash out'},
        ],
    },
    {
        title: addDays(today,3),
        data: [{ hour: '5pm', duration: '40m', title: 'Fly Away' },
            { hour: '2pm', duration: '15m', title: 'Dance' },
        ],
    },
    {
        title: addDays(today,4),
        data: [{ hour: '9am', duration: '3hr', title: 'Be gone' },
            { hour: '8pm', duration: '6hr', title: 'Do something else' },
            {hour: '11am', duration:'10m', title:'Stand on Head'},
        ],
    },
    {
        title: addDays(today,5),
        data: [{ hour: '11am', duration: '5hrs', title: 'Why do this task?' },
            { hour: '7pm', duration: '1hr', title: 'Clean Dishes' }
        ],
    },
    {
        title: addDays(today,6),
        data: [{ hour: '9pm', duration: '20m', title: 'Fall Down the Stairs' }],
    },

];

export function getMarkedDates() {
    const marked: MarkedDates = {};
    agendaTasks.forEach(item => {
        if (item.data && item.data.length > 0 && item.data.length !== 0) {
            marked[item.title] = { marked: true };
        } else {
            marked[item.title] = { disabled: true };
        }
    });
    return marked;
}
