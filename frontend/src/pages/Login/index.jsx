import { useEffect } from "react";
import LoginForm from "./login";
import RegisterForm from "./register";
import { useSelector } from "react-redux"

const Login = () => {
  
  const login = useSelector((state) => state.auth.login);

  return (
    <div className="h-screen w-screen text-center flex flex-col items-center justify-around">
      <h1 className="font-bold text-white text-6xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Welcome to B8rHomes</h1>
        <div className="image bg-[url('./hotelbg.jpeg')] h-screen w-screen bg-cover blur-sm absolute -z-10"></div>
        <div className="login rounded-md shadow-lg w-2/5 bg-opacity-70 bg-white mb-16 text-left">
          {
            login ? <LoginForm />: <RegisterForm />
          }
        </div>
    </div>
  );
};

export default Login;
