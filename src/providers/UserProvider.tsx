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

interface IUserContext {
  logout: () => void;
  login: ({ name, token }: any) => void;
  signIn: (email: String, password: String) => Promise<void>;
  register: (name: String, email: String, password: String) => Promise<Boolean>;
  userError: any;
  cookies: any;
  coins: Number;
  setCoins: any
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: Props) => {
  const [userError, setUserError] = useState('');
  const [coins, setCoins] = useState(0);
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

  const signIn = async (email: String, password: String): Promise<void> => {
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
        setUserError(error.response.data.error);
        console.log(error.response.data.error);
        console.log(userError);
        setTimeout(() => {
          setUserError('');
        }, 2500);
      }
    }
  };

  const register = async (name: String, email: String, password: String): Promise<Boolean> => {
    try {
      const result = await bffapi.post('/register', {
        email: email,
        name: name,
        password: password
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  return (
    <UserContext.Provider
      value={{
        userError,
        register,
        logout,
        login,
        signIn,
        cookies,
        coins,
        setCoins
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
