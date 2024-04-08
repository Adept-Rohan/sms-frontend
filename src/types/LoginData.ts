export interface LoginData {
  userData: {
    user: {
      id: number;
      username: string;
      password: string;
      createdOn: string | Date;
      role: string;
    };
    accessToken: string;
  };
  refreshToken: string;
  message: string;
}
