import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useState } from 'react';
import { useController } from 'react-hook-form';

export type PasswordFieldProps = {
  name: string;
  control: any;
} & Omit<TextFieldProps, 'control' | 'name'>;

export function PasswordField(props: PasswordFieldProps) {
  const { name, control, ...textFieldProps } = props;

  const [showPassword, setShowPassword] = useState(false);

  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, control });

  return (
    <TextField
      // text field props
      fullWidth
      margin="dense"
      {...textFieldProps}
      // binding form fields into text field props
      {...field}
      inputRef={ref}
      // field validation
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      // handle show password logic
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShowPassword(value => !value)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
