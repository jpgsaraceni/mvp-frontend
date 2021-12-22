import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import Cookies from 'universal-cookie';
import { bffapi } from '../services/bffapi';

type Props = {
  children?: React.ReactNode;
  email?: string;
  name?: string;
  password?: string;
};


export const UserContext = createContext({
  logout: (params: any) => {},
  login: (params: any) => {},
  signIn: (params: any) => {},
  userError: '',
  cookies: '' as any,
});

export const UserProvider = ({ children }: Props) => {
  const [userError, setUserError] = useState('');
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  const login = useCallback(({ name, token }) => {
    const userData = [
      {
        name: name,
        token: token,
      },
    ];
    console.log(userData);

    localStorage.setItem('@droplingo:name', userData[0].name);
    return true;
  }, []);

  const logout = useCallback(() => {
    cookies.remove('auth');
  }, [cookies]);

  const signIn = async ({ email, password }: Props) => {
    try {
      setUserError('');
      const userData = await bffapi.post('/login', null, {
        headers: {
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      cookies.set('auth', userData.data.token);
      login(userData.data);
    } catch (error: any) {
      if (error.response.status !== 200) {
        setUserError(
          error.response.data.error
        );
        console.log(error.response.data.error);
        console.log(userError);
        setTimeout(() => {
          setUserError('');
        }, 2500);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userError,
        logout,
        login,
        signIn,
        cookies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
