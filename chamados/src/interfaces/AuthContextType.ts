export interface AuthContextType {
  signed: boolean;
  user: null;
  signIn: (email: string, password: string)=>void;
}
