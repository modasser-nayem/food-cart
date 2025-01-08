type TUserRole = "user" | "admin";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: TUserRole;
  created_at?: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  role?: TUserRole;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserServiceRepository {
  // eslint-disable-next-line no-unused-vars
  register(data: IRegisterUser): null;
  // eslint-disable-next-line no-unused-vars
  login(data: ILoginUser): Promise<{ access_token: string } | null>;
}
