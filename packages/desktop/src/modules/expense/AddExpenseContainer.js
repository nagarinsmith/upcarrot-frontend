import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ExpenseWrapper } from "src/components/expenses/ExpenseWrapper";
import { ExpenseForm } from "src/components/expenses/ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import * as yup from "yup";
import ExpenseInput from "src/components/expenses/ExpenseInput";
import { HeroContainer } from "src/components/index";
import styled from "styled-components";

const AddExpenseSchema = yup.object().shape({
  total: yup.number().required("Total is required")
});

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);
  margin: 10px;
`;

const categories = [
  { label: "maintenance", value: 1 },
  { label: "personal", value: 2 },
  { label: "group", value: 3 },
  { label: "rent", value: 4 },
  { label: "food", value: 5 }
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

const AddExpenseContainer = ({ onSubmitForm, isLoading }) => {
  const { handleSubmit } = useForm({
    validationSchema: AddExpenseSchema
  });

  const [startDate, setStartDate] = useState(new Date());

  return (
    <ExpenseForm onSubmit={handleSubmit(onSubmitForm)}>
      <ExpenseInput
        type="text"
        label="Description"
        name="description"
        placeholder="Bought things"
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
          <Select options={categories} styles={colourStyles} />
        </div>
      </RowContainer>
    </ExpenseForm>
  );
};

export default AddExpenseContainer;
