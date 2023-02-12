import TextField from "@mui/material/TextField";
import { ChangeEventHandler, FocusEventHandler } from "react";
import Autocomplete from "@mui/material/Autocomplete";

interface FormInputProps {
  name: any;
  value:any;
  error: string | undefined;
  isTouched: boolean;
  key: string;
  label: string;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onBlur: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
export const FormInput = (props: FormInputProps) => {
  return (
    <TextField
    value={props.value}
      fullWidth
      id={props.key}
      key={props.key + "key"}
      name={props.name}
      label={props.label}
      variant="standard"
      error={props.isTouched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur}
      helperText={props.isTouched && props.error}
    />
  );
};

export const CountryInput = (props: any) => {
  return (
    <Autocomplete
      multiple={props.multiple || false}
        groupBy={(option: string) => option[0]}
      key={props.key}
      id={props.label}
 
      value={props.value}
      options={props.options}
      autoHighlight
      onChange={(event: any, newValue: any | null) => {
      
        props.setValue(newValue || null);
        try {
          props.changeCities(newValue);
        } catch (error) {}

        if (newValue?.code !==undefined) {
          props.setTouched(false);
        } else {
          props.setTouched(true);
        }
      }}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          key={params.id}
          onClick={() => props.setTouched(true)}
          error={props.touched && (props.error ? true : false)}
          helperText={props.touched && props.error!}
          value={props.value}
          onChange={props.onChange!}
          name={props.name}
          {...params}
          label={props.label}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          variant={"standard"}
        />
      )}
    />
  );
};

export const CitiesInput = (props: any) => {
  return (
    <Autocomplete
      multiple={true}
      groupBy={(option: string) => option[0]}
      key={"country"}
      id={"country"}
      //   options={props.options}
      options={props.options.sort()}
      autoHighlight
      onChange={(event: any, newValue: any | null) => {
        props.setValue(newValue?.code || null);

        if (newValue?.code !== undefined) {
          props.setTouched(false);
        } else {
          props.setTouched(true);
        }
      }}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          key={params.id}
          onClick={() => props.setTouched(true)}
          error={props.touched && (props.error ? true : false)}
          helperText={props.touched && props.error!}
          value={props.value}
          onChange={props.onChange!}
          name={props.name}
          {...params}
          label="Choose a Country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          variant={"standard"}
        />
      )}
    />
  );
};
