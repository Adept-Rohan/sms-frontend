import { create } from "zustand";
import { LoginData } from "../types/LoginData";

export type LoginSessionStore = {
  loginData: LoginData | null;
  setLoginData: (data: LoginData) => void;
};

export const useLoginSessionStore = create<LoginSessionStore>((set) => ({
  loginData: null,
  setLoginData: (data: LoginData) =>
    set({
      loginData: data,
    }),
}));
