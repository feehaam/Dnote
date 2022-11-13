import React from "react";

export const Homepage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-indigo-700">
        <div className="z-0 flex justify-center items-center p-[1rem] gap-36 max-w-[100rem] flex-col lg:flex-row">
          <img
            src="./src/assets/cover.svg"
            className="max-w-sm lg:max-w-[40rem] rounded-lg slide-in-right "
          />
          <div className="">
            <h2 className="text-white text-5xl text-center mb-5 font-bold">Please Login</h2>
            <div className="card flex-shrink-0 w-[30rem] max-w-[50rem] shadow-2xl bg-base-100 ">
              
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
