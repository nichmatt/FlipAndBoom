import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setResponseMessage } from "../actionCreators";
export default function MessageModal({ message }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setResponseMessage(""));
  };

  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 5000);
  });
  
  return (
    <>
      <div
        className="fixed bg-black opacity-[85%] backdrop-blur-[5px] pointer-events-auto z-30 top-0 left-0 right-0 bottom-0 cursor-pointer"
        onClick={handleClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[35] ">
        <div className="w-[20rem] h-[12rem] bg-slate-200 rounded-md flex flex-col items-center animate__animated animate__bounceIn">
          <div className="mt-5">
            <svg
              className="text-green-600 animate__animated animate__delay animate__rotateIn animate__rotateIn"
              width="90"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <path d="M22 4 12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="mt-4">
            <p className="font-bold text-2xl uppercase">
              {message || "Success"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
