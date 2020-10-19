import React, { useState } from "react";
import DatePicker, {CalendarContainer} from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';

import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const MyContainer = ({className, children}) => {
    return (
        <div>
            <CalendarContainer className={className}>
                <div style={{ background: "#f0f0f0", display: "flex", textAlign: "center" }}>
                <FormGroup style={{ margin: "0px"}}>
                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="오늘" />
                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="어제" />
                </FormGroup>
                </div>
                <div style={{ position: "relative", padding: "0px"}}>{children}</div>
            </CalendarContainer>
        </div>
    );
};

const Dates = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            dateFormat="yyyy.MM.dd(eee)"
            locale="ko"
            selected={startDate} 
            onChange={date => setStartDate(date)}
            calendarContainer={MyContainer}
        />
    );
}

export default Dates;