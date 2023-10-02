import { useState } from "react";
export default function NewsCard({ title, newsId, text }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <>
    <div
      className="mt-[1vw] ml-[30vw] px-[25px] py-[15px] max-w-[50vw] px-50px text-white relative z-10"
      style={{
        borderRadius: "0px 0px 150px 0px",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
      onClick={toggleShow}
    >
      <div className="border-b border-slate-300 mb-2">{title}</div>
     <div className="leading-tight">{text}</div>
    </div>
    </>
  );
}
