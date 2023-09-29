import { useForm } from 'react-hook-form'
import { TextField, Button } from '@mui/material';

function Formulario() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    // resolver: joiResolver(registerSchema),
    defaultValues: {
      name: '',
      description: '',
      id: '',
      trainers: '',
    },
  });


  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error.details);
    }
  };

  return (
    <>
      <form className='flex flex-col w-1/2 items-center' onSubmit={handleSubmit(onSubmit)}>
        <TextField margin='normal' fullWidth label='Name' {...register('name')} error={!!errors.name} helperText={errors.name?.message} />

        <TextField
          margin='normal'
          label='Lastname'
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />

        <TextField margin='normal' label='ID' {...register('id')} error={!!errors.id} helperText={errors.id?.message} />

        <TextField margin='normal' label='Email' {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
      </form>
      <Button onClick={() => reset()} variant='contained' color='secondary'>
        Reset
      </Button>
      <Button type='submit' variant='contained' color='primary'>
        Send
      </Button>
    </>
  );
}

export default Formulario;
