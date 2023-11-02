import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/2 bg-white rounded-lg shadow-md p-5">
        <div className="flex justify-center">
          <h1 className="text-2xl  font-thin tracking-widest mb-4 mx-0">
            Masuk ke akun anda
          </h1>
        </div>
        <form action="/login" method="post">
          <p className="pl-2 font-semibold text-sm text-gray-600 mb-1">
            Alamat email
          </p>
          <input
            type="email"
            name="email"
            class="w-full p-2 border-gray-400  focus:outline-none border"
          />
          <p className="pl-2 font-semibold text-sm text-gray-600 mt-4 mb-1">
            Password
          </p>
          <input
            type="password"
            name="password"
            class="w-full p-2 border-gray-400  focus:outline-none border"
          />
        </form>
        <a href="">
          <p className="font-normal text-gray-700 tracking-wide underline mt-2 pl-2">
            Lupa password?
          </p>
          <div className="pl-1 mt-2 flex gap-2 items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="rounded w-4 h-4 focus:ring-gray-700 text-gray-700 focus:border-none appearance-none"
            />
            <label className="text-base tracking-wider text-gray-700">
              Tetap masuk
            </label>
          </div>
        </a>
        <button className="w-full py-3 hover:bg-white mt-6 hover:text-slate-900 hover:border hover:border-black bg-slate-900 text-white uppercase font-thin tracking-widest">
          Login
        </button>
        <p className="text-center mt-2 text-sm text-gray-600">
          Dengan membuat atau mendaftar akun, Anda{" "}
          <p>
            menyetujui isi{" "}
            <a className="text-blue-400" href="">
              Persyaratan dan Ketentuan
            </a>{" "}
            &
          </p>{" "}
          <a href="" className="text-blue-400">
            Kebijakan Privasi{" "}
          </a>
          kami.
        </p>
        <p class="mt-2 text-gray-600">
          Belum punya akun?{" "}
          <a href="/register" class="text-blue-500">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
