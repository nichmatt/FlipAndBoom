import { useSelector } from "react-redux";

// import "./YourComponent.css";

import { experience } from "../helpers";

export default function NavigationBar() {
  const { profile } = useSelector((state) => state.userReducer);

  return (
    <>
      <section
        id="NavigationBar-Section"
        className="h-[80px] bg-[#2a2550] w-[100vw] mw-[100vw] font-basefont font-semibold tracking-tight z-10"
        style={{ position: "fixed ", top: "0" }}
      >
        {/* <div className="h-[25px] bg-[#ffb800]">
					<marquee
						direction="left"
						behavior="scroll|slide|alternate"
						scrollamount="number"
						scrolldelay="number"
						loop="number"
						style={{ textShadow: "0.1px 0.1px 1px #2a2550", color: "#2a2550" }}
					>
						Welcome to Flip & Boom
					</marquee>
				</div> */}
        <div className="h-[25px] bg-[#ffb800] flex justify-center">
          <div className="continuous-slide scrolling-text animate__animated animate__slideInLeft w-[80%]">
            Welcome to Flip &amp; Boom
          </div>
        </div>
        <div className="flex justify-end py-4 mx-[10vw]">
          <i
            className="fa-solid fa-money-bill-1-wave text-[#ffb800] py-[4px] "
            style={{ textShadow: "0.5px 0.1px 5px" }}
          ></i>
          <p className="pl-[10px] text-[#ffb800] italic">:</p>
          <p
            style={{ textShadow: "1px 1px 10px" }}
            className="pr-[30px] pl-[10px] text-[#ffb800] italic"
          >
            {profile?.balance}
          </p>
          <p className="px-[30px] text-[#fff] italic">
            LV : {experience(profile?.experience)}
          </p>
          <p className="px-[30px] text-[#fff] italic">{profile?.username}</p>
        </div>
      </section>
    </>
  );
}
