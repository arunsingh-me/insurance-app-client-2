import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';
import Link from '@mui/material/Link';
import axios from '../utils/axios';
import toast from 'react-hot-toast';

export default function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ username, password }) => {
    try {
      const response = await axios.post('/auth/token', {
        username,
        password
      });

      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      toast.success('Login success');
      const data = response.data;
      console.log(data);
      console.log(typeof data);

      setAuth(data);
      navigate(from);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form className="m-10 p-10 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

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
          Login
        </Button>

        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Don't have an account? <Link href="/register">Register</Link>
        </Typography>
      </form>
    </div>
  );
}
