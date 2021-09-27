import { Button, Paper, Typography } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};
export const FormDemo = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
        border: "1px solid #2596be"
      }}
    >
      <Typography variant="h4"> Formulario 360</Typography>

      <FormInputText type="text" name="nombre" control={control} label="Nombre" />
      <FormInputText type="text" name="apellido" control={control} label="Apellido" />
      <FormInputText type="text" name="cedula" control={control} label="Cédula" />
      <FormInputText type="email" name="textValue" control={control} label="Correo" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Selecciona Género"}
      />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Nivel de Estudios"
      />
      <FormInputText name="textValue" control={control} label="Dirección" />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
    </Paper>
  );
};
