/* eslint-disable no-unused-vars */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


function UserProfile() {
    const { user } = useContext(AuthContext);

  return (
    <div className="grid my-8 gap-4 lg:grid-cols-3">
      <div className="  bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg ms-2">
        <div className=" ">
          <Avatar
            className="mx-auto mt-4"
            src={user?.photoURL}
            alt="User Avatar"
          />
          <h2 className="text-center text-2xl font-bold">{user.displayName}</h2>
         
          <div className="flex justify-between px-4">
            <div className="">
              <p>DOB</p>
              <p>08/5/2023</p>
              <div>
                <p>Age</p>
                <p>22 y. 4m</p>
              </div>
            </div>

            <div>
              <p>height</p>
              <p>168 inch</p>
              <div>
                <p>Wight</p>
                <p>59</p>
              </div>
            </div>
          </div>
        </div>
        {/* Profile button */}
        <div className="mt-20 mx-6">
          <button className="btn bg-gradient-to-l from-slate-500 to-slate-200 text-slate-600 border border-slate-400 w-full px-12">
            send message
          </button>
        </div>
      </div>
      <div className="ms-24 ps-5 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg">
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="">
          <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
            <div className="col-span-2 text-lg font-bold capitalize rounded-md">
              Hello world
            </div>
            <div className="col-span-2 rounded-md">
              Using Lorem ipsum to focus attention on graphic elements in a
              webpage design
            </div>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
              <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                Hello world
              </div>
              <div className="col-span-2 rounded-md">
                Using Lorem ipsum to focus attention on graphic elements in a
                webpage design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
