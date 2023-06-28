import React from "react";
import { Form } from "react-bootstrap";
import "./SelectOption";

export const SelectOption = ({ placeholder, options, changeFunction}) => {
  return (
    <>
      <Form.Select size="lg" className="formSelectDesign" onChange={changeFunction}>
        <option>{placeholder}</option>
        {options?.map((item) =>
          <option key={item.value} value={item.id}>{item.firstName} {item.lastName} {item.treatmentName}</option>
        )}
      </Form.Select>
    </>
  );
};
