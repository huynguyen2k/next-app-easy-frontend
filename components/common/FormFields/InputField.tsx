import { TextField, TextFieldProps } from '@mui/material';
import { useController } from 'react-hook-form';

export type InputFieldProps = {
  name: string;
  control: any;
} & Omit<TextFieldProps, 'control' | 'name'>;

export function InputField(props: InputFieldProps) {
  const { name, control, ...textFieldProps } = props;
  const { field, fieldState } = useController({ name, control });

  return (
    <TextField
      fullWidth
      margin="dense"
      inputRef={field.ref}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      {...field}
      {...textFieldProps}
    />
  );
}
