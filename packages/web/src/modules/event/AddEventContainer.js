import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { EventForm } from "src/components/events/EventForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import EventInput from "src/components/events/EventInput";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { Modal, Button } from "semantic-ui-react";

const AddEventSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  users: yup.array(
    yup.string().email("Some emails are not correctly formated")
  ),
  date: yup.date().required("Date is required")
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

export const Error = styled.div`
  color: red;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: "#000";
  flex-wrap: wrap;
`;

const DateContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);
  margin: 10px;
`;

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

const components = {
  DropdownIndicator: null
};

const createOption = label => ({
  label,
  value: label
});

const AddEventContainer = ({
  onSubmitForm = data => {
    // console.log("testam", data);
  },
  isLoading,
  close
}) => {
  const {
    handleSubmit,
    register,
    setValue: setValueForm,
    watch,
    errors
  } = useForm({
    validationSchema: AddEventSchema
  });

  const values = watch();

  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);

  const handleChange = (value, actionMeta) => {
    setValue(value);
    setValueForm("users", value.map(item => item.value));
  };
  const handleInputChange = inputValue => {
    setInputValue(inputValue);
  };
  const handleKeyDown = event => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        handleChange([...(value || []), createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    register({ name: "date" }, { required: true });
    register({ name: "users" }, { required: true });
  }, [register]);

  return (
    <>
      <Modal.Content
        style={{
          ...modalStyles.text,
          ...modalStyles.body,
          ...modalStyles.borderBottom
        }}
      >
        <EventForm onSubmit={handleSubmit(onSubmitForm)}>
          <EventInput
            type="text"
            label="Name"
            name="name"
            placeholder="Name of the event"
            ref={register({ required: true })}
            disabled={isLoading}
          />
          <RowContainer>
            <div
              style={{ minWidth: "230px", width: "80%", padding: "20px 10px" }}
            >
              <CreatableSelect
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter users"
                value={value}
              />
            </div>
            <DateContainer>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ margin: 10 }} />
              <DatePicker
                selected={values.date}
                onChange={value => setValueForm("date", value)}
              />
            </DateContainer>
          </RowContainer>
        </EventForm>
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

export default AddEventContainer;
