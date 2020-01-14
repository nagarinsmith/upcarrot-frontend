import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ExpenseForm } from "src/components/expenses/ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "semantic-ui-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import * as yup from "yup";
import ExpenseInput from "src/components/expenses/ExpenseInput";
import styled from "styled-components";
import * as moment from "moment";

const AddExpenseSchema = yup.object().shape({
  total: yup.number().required("Total is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required(),
  date: yup.date().required()
});

const modalStyles = {
  text: {
    color: "white"
  },
  body: {
    background: "#151523"
  },
  borderBottom: {
    borderBottom: "1px white solid"
  }
};

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

const categories = [
  { label: "BILLS", value: "BILLS" },
  { label: "RENT", value: "RENT" },
  { label: "FOOD", value: "FOOD" },
  { label: "SHOPPING", value: "SHOPPING" },
  { label: "OTHERS", value: "OTHERS" }
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

export const Error = styled.div`
  color: red;
`;

const AddExpenseContainer = ({ close, open, isLoading, addExpense }) => {
  const { handleSubmit, setValue, watch, register, errors } = useForm({
    validationSchema: AddExpenseSchema
  });

  const values = watch();

  const [select, setSelect] = useState("");

  useEffect(() => {
    register({ name: "date" }, { required: true });
    register({ name: "category" }, { required: true });
  }, [register]);

  const onSubmitForm = ({ date, ...rest }) => {
    close();
    addExpense({ ...rest, date: moment(date).toISOString() });
  };

  return (
    <>
      <Modal.Content
        style={{
          ...modalStyles.text,
          ...modalStyles.body,
          ...modalStyles.borderBottom
        }}
      >
        <ExpenseForm onSubmit={handleSubmit(onSubmitForm)}>
          <ExpenseInput
            type="text"
            label="Description"
            name="description"
            placeholder="Bought things"
            ref={register({ required: true })}
            disabled={isLoading}
          />
          <ExpenseInput
            type="number"
            label="Total"
            name="total"
            placeholder="Not a lot hopefully"
            ref={register({ required: true })}
            disabled={isLoading}
          />
          <RowContainer>
            <DateContainer>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ margin: 10 }} />
              <DatePicker
                selected={values.date}
                onChange={value => setValue("date", value)}
              />
            </DateContainer>
            <div style={{ width: "230px", padding: "20px" }}>
              <Select
                options={categories}
                styles={colourStyles}
                value={select}
                onChange={value => {
                  setSelect(value);
                  setValue("category", value.value);
                }}
              />
            </div>
          </RowContainer>
        </ExpenseForm>
        {Object.keys(errors).length > 0 && <Error>Invalid Data</Error>}
      </Modal.Content>
      <Modal.Actions style={{ ...modalStyles.text, ...modalStyles.body }}>
        <Button className="cancelNumber" onClick={close}>
          Cancel
        </Button>
        <Button
          positive
          className="saveButton"
          icon="checkmark"
          labelPosition="right"
          content="Save"
          onClick={handleSubmit(onSubmitForm)}
          type="submit"
        />
      </Modal.Actions>
    </>
  );
};

export default AddExpenseContainer;
