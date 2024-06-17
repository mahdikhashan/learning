import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import { useAccount } from '../../../../domain/account/index.js';
// import { useNavigate, redirect } from 'react-router-dom';
// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import SignInForm from '../../../../domain/account/components/organisms/sign-in-form.jsx';
import { useNotifier } from '../../../../services/notificationAdaptor.js';
import { NotificationService } from '../../../ports.js';
// import useAPI from '@/hooks/use-api/index.js';
// import useAxios from '@/hooks/use-axios/index.js';
// import { loginByCredentials } from '@/domain/account/services/loginByCredentials.js';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignInPage = () => {
  // const { signInUser } = useAccount();
  // const navigate = useNavigate();
  // const { POST } = useAPI()
  // const { response, error, loading, axiosFetch } = useAxios();
  //
  // const loginByCredentials = (params) => {
  //   axiosFetch({ method: 'POST', url: '/users', requestConfig: { data: params } });
  //
  //   console.log(response);
  //   console.log(error);
  //   console.log(loading);
  //
  //   if (response.statusText === 'OK') {
  //     if (response.status === 201) {
  //       signInUser(...params);
  //     }
  //   }
  // };

  const notifier: NotificationService = useNotifier();

  const handleSubmit = (event) => {
    event.preventDefault();
    // loginByCredentials({ username: 'mahdikhashan1@gmail.com', password: '1234' });

    notifier.notify('hello guys');

    // navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Sign In | User Manager</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <SignInForm />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;
