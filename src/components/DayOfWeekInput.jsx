import {observer} from "mobx-react";

function DayOfWeekInput(props) {
    let days = {
        "MONDAY": "Понедельник",
        "TUESDAY": "Вторник",
        "WEDNESDAY": "Среда",
        "THURSDAY": "Четверг",
        "FRIDAY": "Пятница",
        "SUNDAY": "Суббота",
        "SATURDAY": "Воскресенье",
    }

    let options = []
    for (const [value, text] of Object.entries(days)) {
        if (value == props.defaultValue) {
            options.push(
                <option value={value} key={value} selected>{text}</option>
            )
        } else {
            options.push(
                <option value={value} key={value}>{text}</option>
            )
        }
    }

    return(
        <select className="form-select" onChange={props.onChange}>
            {options}
        </select>
    )
}

export default observer(DayOfWeekInput)