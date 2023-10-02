import { NavLink } from "react-router-dom";

export default function UnregisteredPage() {
  return (
    <div className="max-h-[100vh]">
      <img
        src="/assets/unregisteredpage.svg"
        className="scroll-none"
        alt="asdasdasd"
      />
      <p
        className="uppercase absolute top-[35vh] left-[30vw] w-[40vw] py-[10vh] text-center font-bold text-[1rem] text-white px-[10vw] rounded-md italic"
        style={{
          background:
            "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 90%)",
          boxShadow: "1px 1px 12px",
        }}
      >
        Let's work together to make this world better. Apologies, but it seems
        this page is not yet registered.
      </p>
      <NavLink
        className="uppercase absolute top-[57vh] left-[39vw]  py-[10px] text-center font-bold text-[1rem] text-white px-[10vw] hover:text-[rgba(2,255,247,0.5)] italic"
        to="/home"
      >
        BACK
      </NavLink>
    </div>
  );
}
