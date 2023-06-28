import React from "react";
import { Form } from "react-bootstrap";

export const SelectOption = ({ placeholder, options, changeFunction}) => {
  return (
    <>
      <Form.Select size="lg" onChange={changeFunction}>
        <option>{placeholder}</option>
        {options?.map((item) =>
          <option key={item.value} value={item.id}>{item.firstName} {item.lastName}</option>
        )}
      </Form.Select>
    </>
  );
};
