import { useState } from 'react';

export const useForm = (callback: any, initialState: any = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };

  const handleArrayInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.split(','),
    });
  };

  return {
    onChange,
    onSubmit,
    values,
    handleArrayInput,
  };
};
