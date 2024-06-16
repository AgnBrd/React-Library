import { createContext, useContext, useState, ReactNode } from 'react';
import { LibraryClient } from './library-client';
import { LoginResponseDto } from './dto/login.dto';

interface ApiContextProps {
  apiClient: LibraryClient;
  user: LoginResponseDto | null;
  setUser: (user: LoginResponseDto | null) => void;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export default function ApiProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<LoginResponseDto | null>(null);
  const apiClient = new LibraryClient();

  return (
    <ApiContext.Provider value={{ apiClient, user, setUser }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
}
