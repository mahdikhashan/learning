import useAPI from '../../../../packages/hooks/use-api/index.js';
import { useAccount } from '../index.js';

const API_ROOT = 'http://localhost:3000/users';

// export const loginByCredentials = async (credentialLogin) => {
//   const response = await fetch(`${API_ROOT}`, {
//     mode: 'cors',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentialLogin)
//   })
//     .then((response) => response.json())
//     .then((data) => data.token)
//     .catch((error) => console.error('Failed to login.'));
//   return response.result();
// };

export const loginByCredentials = (params) => {
  const [response] = useAPI().POST({ url: '/users', params });
  const { signInUser } = useAccount();

  if (response.statusText === 'OK') {
    if (response.status === 201) {
      signInUser(...params);
    }
  }
};
