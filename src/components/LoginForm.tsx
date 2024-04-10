import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../schemas/LoginSchema";
import { InputField } from "./Slot/InputField";
import { loginFormStyle } from "../styles/LoginFormStyle";
import { buttonStyle } from "../styles/ButtonStyle";
import {
  LoginSessionStore,
  useLoginSessionStore,
} from "../store/useLogInSession";
import axios from "axios";
import { createMutationHook } from "../utilities/createMutationHook";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLoginSubmit = (data: LoginFormData) => {
    login(data);
  };

  const { inputField } = loginFormStyle();

  const [, setLoginData] = useLoginSessionStore((state: LoginSessionStore) => [
    state.loginData,
    state.setLoginData,
  ]);

  const useLoginMutation = createMutationHook((data: LoginFormData) =>
    axios
      .post("http://192.168.10.28:3030/auth/login", data)
      .then((res) => res?.data)
      .catch((err) => {
        if (err?.response?.data) {
          return err.response.data;
        } else {
          return "Error";
        }
      })
  );

  const { mutate: login, error } = useLoginMutation({
    onSuccess(data) {
      setLoginData(data);
      navigate("/");
    },
  });

  console.log("🚀 ~ LoginForm ~ error:", error);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <InputField
            labels="Username"
            type="text"
            className={inputField()}
            placeholder="Enter your username"
            errorMessage={errors.username?.message}
            error={errors.username?.message}
            {...register("username")}
            required
          ></InputField>

          <InputField
            labels="Password"
            type="password"
            className={inputField()}
            placeholder="Enter your password"
            errorMessage={errors.password?.message}
            error={errors.password?.message}
            {...register("password")}
            required
          ></InputField>
          <div className="mt-6">
            <button
              type="submit"
              className={buttonStyle({ color: "loginButton", size: "sm" })}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
