import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setStatus } from "../../state";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin(e) {
    console.log(detail);
    axios.post("http://localhost:3001/auth/login", detail)
    .then((res) => {
        dispatch(setLogin({ user: res.data.user, token: res.data.token }));
        console.log(res.data);
        console.log(res.data.user);
        navigate("/home");
    })
    .catch((err) => {
        if (err.response.status === 401) {
            alert("Invalid Credentials");
        }
        console.log(err);
    });
  }
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="w-full h-full">
      <form
        className="bg-white shadow-md rounded h-full px-8 pt-6 pb-8 mb-4"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={detail.email}
            onChange={(e) => setDetail({ ...detail, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={detail.password}
            onChange={(e) =>
              setDetail({ ...detail, password: e.target.value })
            }
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={() => dispatch(setStatus({ login: false}))}
          >
            New user?
          </a>
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
  );
};

export default LoginForm;
