import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionRegister } from "../actionCreators/loginRegister";
import { setErrorMessage } from "../actionCreators/messageModal";

export default function Register({ statusSetter }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle input form
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onChangeForm = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // end of handle input form

  //function register
  const register = async (event) => {
    try {
      event.preventDefault();
      if (!form.username || !form.email || !form.password)
        throw { message: "All field is require" };
      await dispatch(actionRegister(form));
      statusSetter();
      // navigate('/home')
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };

  return (
    <>
      <div
        className=" flex-col text-white  px-[80px] pb-[90px] flex text-[1.25rem] items-center backdrop-blur-[2px] bg-[rgba(239,239,239,0.8)] rounded-[20px]"
        style={{
          boxShadow:
            "35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -3px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
        }}
      >
        <div className="w-[200px]">
          <img src="/assets/logo/logo-03-shadow-01.png" alt="logo" />
        </div>
        <div className="text-[#2a2550] font-bold italic mt-[-25px]">
          REGISTER
        </div>
        <form onSubmit={register}>
          <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px]">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={onChangeForm}
              className="bg-transparent focus:outline-none text-[#2a2550] text-xl"
            />
          </div>
          <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px] ">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={onChangeForm}
              className="bg-transparent focus:outline-none  text-[#2a2550]"
            />
          </div>
          <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px] ">
            <input
              type="Password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={onChangeForm}
              className="bg-transparent focus:outline-none  text-[#2a2550]"
            />
          </div>
        </form>
        <NavLink
          className="py-[5px] text-[12px] w-full text-blue-500"
          onClick={() => statusSetter()}
        >
          Already have account? Play now!
        </NavLink>
        <div className="w-[90px] cursor-[url(/assets/logo/lighter.svg),_pointer]">
          <img
            className="absolute w-[60px] left-[72%] hover:opacity-100 opacity-100 cursor-[url('/assets/lighter.svg'),_pointer] rounded-full"
            src="/assets/logo/logo-05.png"
            alt=""
            onClick={register}
          />
          <img
            className="absolute w-[60px] left-[72%] hover:opacity-0 opacity-100 hover:hidden cursor-[url('/assets/lighter.svg'),_pointer] rounded-full"
            src="/assets/logo/logo-05-unactive.png"
            alt=""
            onClick={register}
          />
        </div>
      </div>
    </>
  );
}
