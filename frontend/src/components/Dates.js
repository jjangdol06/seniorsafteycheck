import React, { Component, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment'

import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const MyContainer = ({ className, children }) => {
    return (
        <div>
            <CalendarContainer className={className}>
                <div style={{ background: "#f0f0f0", display: "flex", textAlign: "center" }}>
                    <FormGroup style={{ margin: "0px" }}>
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="오늘" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="어제" />
                    </FormGroup>
                </div>
                <div style={{ position: "relative", padding: "0px" }}>{children}</div>
            </CalendarContainer>
        </div>
    );
};

class Dates extends Component{

    constructor(props) {
        super(props)
        this.setStartDate = this.setStartDate.bind(this);
        this.startDate = new Date()
    }

    setStartDate(date) {
        this.startDate = date
        console.log(this.startDate)
    }
    
    render() {
        return (
            <DatePicker
                dateFormat="yyyy.MM.dd(eee)"
                locale="ko"
                selected={this.startDate}
                onChange={date => this.setStartDate(date)}
                calendarContainer={MyContainer}
            />
        )
    }
}

export default Dates;