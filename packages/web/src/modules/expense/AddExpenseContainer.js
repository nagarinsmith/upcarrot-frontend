import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ExpenseWrapper } from "src/components/expenses/ExpenseWrapper";
import { ExpenseForm } from "src/components/expenses/ExpenseForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import * as yup from "yup";
import ExpenseInput from "src/components/expenses/ExpenseInput";
import { HeroContainer } from "src/components/index";

const AddExpenseSchema = yup.object().shape({
  total: yup.number().required("Total is required")
});

const categories = [
  { label: "maintenance", value: 1 },
  { label: "personal", value: 2 },
  { label: "group", value: 3 },
  { label: "rent", value: 4 },
  { label: "food", value: 5 }
];
const AddExpenseContainer = ({ onSubmitForm, isLoading }) => {
  const { handleSubmit } = useForm({
    validationSchema: AddExpenseSchema
  });
  
  const [startDate, setStartDate] = useState(new Date());

  return (
    <HeroContainer>
      <ExpenseWrapper>
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
            placeholder="Total"
            disabled={isLoading}
          />
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
          <div style={{ width: "230px", padding: "20px" }}>
            <Select options={categories} />
          </div>
        </ExpenseForm>
      </ExpenseWrapper>
    </HeroContainer>
  );
};

export default AddExpenseContainer;
