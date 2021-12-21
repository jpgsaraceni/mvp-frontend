import React, { createContext, useCallback, useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { bffapi } from '../services/bffapi';

type Props = {
  children?: React.ReactNode;
  email?: string;
  name?: string;
  password?: string;
};

export const UserContext = createContext({
  user: {} as any,
  setUser: (params: any) => {},
  logout: (params: any) => {},
  login: (params: any) => {},
  signIn: (params: any) => {},
  userError: '',
  cookies: [] as any,
  setCookies: (params: any, params2: any) => {},
});

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState([]);
  const [userError, setUserError] = useState('');
  const [cookies, setCookies, removeCookies] = useCookies(['auth']);

  const login = useCallback(({ email, name }) => {
    const userData = [{ email, name }];

    setUser(userData as any);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser([]);
    removeCookies('auth');
  }, [removeCookies]);

  const signIn = async ({ email, password }: Props) => {
    try {
      setUserError('');
      const userData = await bffapi.get('/login', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      login(userData);
    } catch (error: any) {
      if (error.response.status !== 200) {
        const pathError = Object.keys(
          error.response.data.message.criticalErrors,
        )[0];
        setUserError(
          error.response.data.message.criticalErrors[pathError].message,
        );
        setTimeout(() => {
          setUserError('');
        }, 2500);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        login,
        signIn,
        userError,
        cookies,
        setCookies,
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
