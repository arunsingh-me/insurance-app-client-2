import axios from '../utils/axios';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ username, name, email, password }) => {
    try {
      await axios.post('/auth/register', {
        username,
        name,
        password,
        email
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form className="m-10 p-10 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>

        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: 'Name is required'
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              margin="normal"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: 'Username is required'
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              margin="normal"
              fullWidth
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              margin="normal"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password is required'
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              margin="normal"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <br />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
        >
          Register
        </Button>

        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </form>
    </div>
  );
};

export default Register;
