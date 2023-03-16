export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
}

export interface CreateUser extends User {
  password: string;
  passwordConfirm: string;
}
