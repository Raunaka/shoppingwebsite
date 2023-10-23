import React from "react";
import { TextField } from "@material-ui/core";

const CustomTextField = ({ label, name, type, value, onChange }) => {
  return (
    <TextField
      name={name}
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    />
  );
};

export default CustomTextField;
