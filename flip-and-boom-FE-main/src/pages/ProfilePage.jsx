import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../actionCreators";
import { experience } from "../helpers";

export default function ProfilePage() {
  const { profile } = useSelector((state) => state.userReducer);
  const [char, setChar] = useState("");
  const [card, setCard] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      setChar(`/assets/character/${profile?.selectedChar}.png`);
      setCard(`/assets/card/${profile?.selectedSkin}.png`);
    }
  }, [profile]);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  return (
    <section
      className="min-h-[100vh] w-[100vw] "
      style={{
        marginTop: "30px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          className="h-[50px] w-[120px] mt-[6vw] ml-[75vw] bg-[rgba(2,255,247,0.5)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
          style={{
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <NavLink
            to="/profile"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            PROFILE
          </NavLink>
        </div>
        <div
          className="h-[50px] w-[120px] mt-[6vw]  ml-2  bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
          style={{
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <NavLink
            to="/profile/inventory"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            INVENTORY
          </NavLink>
        </div>
      </div>

      <div
        className="h-[60vh] w-[63vw] mt-[1vw] ml-[30vw] flex px-50px"
        style={{
          border: "4px solid #20203E",
          borderRadius: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.50)",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-center">
          <div className="bg-[rgba(44,44,44,0.5)] ml-[10%] lg:w-72 lg:h-72 h-48 w-48 flex items-center justify-center rounded-md border-white border-2 relative">
            <div
              className="absolute bottom-[0.3rem] text-2xl font-bold italic text-[#ffab10]"
              style={{ textShadow: "0.5px 0.1px 5px" }}
            >
              SELECTED
            </div>
            <img className="" src={char} alt={profile?.selectedChar} />
          </div>
          <div className="bg-[rgba(44,44,44,0.5)] ml-[10%] lg:w-72 lg:h-72 h-48 w-48 flex items-center justify-center rounded-md border-white border-2 relative">
            <div
              className="absolute bottom-[0.3rem] text-2xl font-bold italic text-[#ffb800]"
              style={{ textShadow: "0.5px 0.1px 5px" }}
            >
              SELECTED
            </div>
            <img
              className="w-20 lg:w-40"
              src={card}
              alt={profile?.selectedChar}
            />
          </div>
        </div>
        <div
          className="text-[rgba(255,255,255,0.9)] p-[25px] text-[1.2rem] font-semibold flex flex-col justify-center pl-[3vw] w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.560749299719888) 100%)",
          }}
        >
          <div className="text-[2.5rem] italic font-semibold">
            {profile?.username}
          </div>
          <div>Level: {experience(profile?.experience)}</div>
          <div className="text-[1rem] pt-[2vh] italic font-bold">BESTSCORE</div>
          <div
            className="text-[rgb(149,149,149)]  text-[0.8rem] flex justify-between py-[3px]"
            style={{ textShadow: "0.5px 0.1px 1px" }}
          >
            <div>EASY:</div>
            <div>{profile?.easyScore}</div>
          </div>
          <div
            className="text-[rgba(218,218,218,0.9)]  text-[0.8rem] flex justify-between py-[3px]"
            style={{ textShadow: "0.5px 0.1px 2px" }}
          >
            <div>MEDIUM:</div>
            <div>{profile?.mediumScore}</div>
          </div>
          <div
            className="text-[rgba(241,241,241,0.9)]  text-[0.8rem] flex justify-between py-[3px]"
            style={{ textShadow: "0.5px 0.1px 3px" }}
          >
            <div>HARD:</div>
            <div>{profile?.hardScore}</div>
          </div>
          <div
            className="text-[rgb(255,213,45)]  text-[0.8rem] flex justify-between py-[3px]"
            style={{ textShadow: "0.5px 0.1px 5px" }}
          >
            <div>IMPOSSIBLE:</div>
            <div>{profile?.impossibleScore}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
