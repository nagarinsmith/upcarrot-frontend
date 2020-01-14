import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { EventForm } from "src/components/events/EventForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import * as yup from "yup";
import EventInput from "src/components/events/EventInput";
import { HeroContainer } from "src/components/index";
import styled from "styled-components";

import { Dropdown, Input } from 'semantic-ui-react'

const AddEventSchema = yup.object().shape({
  total: yup.number().required("Total is required")
});


const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: "#000"
`;

const DateContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);
  margin: 10px;
`;

const options = [
    { key: 'andrei', text: 'Andrei', value: 'andrei' },
    { key: 'user', text: 'User', value: 'user' },
    { key: 'mihai', text: 'Mihai', value: 'mihai' },
];

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      // backgroundColor: isDisabled ? "red" : "salmon",
      color: "#FFF",
      cursor: isDisabled ? "not-allowed" : "default"
    };
  }
};

const handleChange = event => {
    setUser(event.target.value);
  };

const AddEventContainer = ({ onSubmitForm, isLoading }) => {
  const { handleSubmit } = useForm({
    validationSchema: AddEventSchema
  });

  const [startDate, setStartDate] = useState(new Date());

  return (
    <EventForm onSubmit={handleSubmit(onSubmitForm)}>
      <EventInput
        type="text"
        label="Name"
        name="name"
        placeholder="Name of the event"
        disabled={isLoading}
      />

        <RowContainer>
         <Dropdown placeholder='Users' fluid multiple selection options={options} />
    
      </RowContainer>

      <RowContainer>
        <DateContainer>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ margin: 10 }} />
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </DateContainer>
        </RowContainer>
    </EventForm>
  );
};

export default AddEventContainer;
