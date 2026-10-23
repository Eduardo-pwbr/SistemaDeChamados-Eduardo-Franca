
export interface AuthContextType {
  signed: boolean;
  loadingAuth: boolean;
  loading: boolean;
  //user: null;
  user: UserData | null;
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
  logout: () =>Promise<void>;

}

export interface UserData {
  uid: string;
  nome: string;
  email: string | null;
  avatarUrl: string | null;
}
