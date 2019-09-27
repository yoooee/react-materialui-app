import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

const InputField = (): JSX.Element => {
  return (
    <>
      <InputLabel>First Name</InputLabel>
      <OutlinedInput
        labelWidth={0}
        autoFocus={true}
        fullWidth={true}
      ></OutlinedInput>
    </>
  );
};

export default InputField;
