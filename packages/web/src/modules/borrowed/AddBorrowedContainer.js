import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ExpenseForm } from "src/components/expenses/ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import * as yup from "yup";
import ExpenseInput from "src/components/expenses/ExpenseInput";
import styled from "styled-components";

const AddBorrowedSchema = yup.object().shape({
  total: yup.number().required("Total is required")
});

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const DateContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);
  margin: 10px;
`;

const persons = [
  { label: "John Doe", value: 1 },
  { label: "Ella Hooman", value: 2 },
  { label: "Ryder Sammy", value: 3 }
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

const AddBorrowedContainer = ({ onSubmitForm, isLoading }) => {
  const { handleSubmit } = useForm({
    validationSchema: AddBorrowedSchema
  });

  const [startDate, setStartDate] = useState(new Date());

  return (
    <ExpenseForm onSubmit={handleSubmit(onSubmitForm)}>
      <ExpenseInput
        type="text"
        label="Description"
        name="description"
        placeholder="You have money to give,huh?"
        disabled={isLoading}
      />
      <ExpenseInput
        type="number"
        label="Total"
        name="total"
        placeholder="Not a lot hopefully"
        disabled={isLoading}
      />
      <RowContainer>
        <DateContainer>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ margin: 10 }} />
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </DateContainer>
        <div style={{ width: "230px", padding: "20px" }}>
          <Select options={persons} styles={colourStyles} />
        </div>
      </RowContainer>
    </ExpenseForm>
  );
};

export default AddBorrowedContainer;
