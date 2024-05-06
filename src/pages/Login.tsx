import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("src/assets/bg.png")',
        backgroundSize: "100% 126.15%",
        backgroundPosition: "0px 0px",
      }}
      className="w-full h-[100vh] bg-gray-200 shadow-lg flex items-center justify-center"
    >
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
        className="w-[600px] h-[420px] border-2 border-solid inline-flex flex-col items-center gap-10 p-10 border-[#FFF] rounded-xl bg-opacity-10 backdrop-blur-2xl "
      >
        <div className="flex items-center gap-[40px]">
          <span>
            <img
              className="h-[70px] w-[64px]"
              src="src/assets/mainlogo.png"
              alt="Logo"
            />
          </span>
          <span className="text-blue-500 font-quicksand font-semibold text-2xl">
            Namuna Boys Hostel
          </span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
