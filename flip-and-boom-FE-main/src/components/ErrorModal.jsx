import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../actionCreators";
export default function ErrorModal({ message }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setErrorMessage(""));
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
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[35] ">
        <div className="w-[20rem] h-[15rem] bg-slate-100 rounded-xl flex flex-col items-center animate__animated animate__shakeX animate__fast">
          <div className="my-5 drop-shadow-md shadow-black">
            <svg
              className="text-red-600 animate__animated animate__pulse animate__infinite"
              width="80"
              height="70"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
              <path d="M12 6.02V6"></path>
              <path d="M12 10v8"></path>
            </svg>
          </div>
          <div className="mx-10">
            <p className="text-center text-2xl font-bold text-black uppercase">
              Error
            </p>
            <h1 className="text-lg">{message}</h1>
          </div>
          <div className="my-5">
            <button
              className="py-1 px-3 border border-black rounded-md bg-sky-500 text-lg font-semibold active:bg-sky-700 shadow-sm hover:shadow-md shadow-black"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
