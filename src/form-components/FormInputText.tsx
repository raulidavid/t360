import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, type, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          type={type}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          required/>
      )}
    />
  );
};
