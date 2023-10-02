import Login from "../components/Login";
import NewsCard from "../components/NewsCard";
import Register from "../components/Register";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../actionCreators/news";
import ErrorModal from "../components/ErrorModal";
import MessageModal from '../components/MessageModal'

export default function LandingPage() {
  const [status, setStatus] = useState("login");
  const { news } = useSelector((state) => state.newsReducer);
  const { error, message } = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();

  function statusSetter() {
    if (status === "login") {
      setStatus("register");
    } else {
      setStatus("login");
    }
  }

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <section
      id="LandingPage-section"
      style={{
        background:
          "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37,29,58,0.00) 100%)",
      }}
    >
      {error ? <ErrorModal message={error} /> : ""}
      {message ? <MessageModal message={message} /> : ""}

      <div className="flex bg-[url(/assets/LandingPage/bgLandingpage.png)] bg-cover h-[100vh] relative bg-opacity-10 border-b-[3px] border-[rgba(0,0,0,0.7)] ">
        <div className="w-[50vw] h-[100vh] flex">
          <div></div>
        </div>

        <div
          className="relative w-full h-full duration-[1234ms]"
          style={
            status == "register"
              ? {
                  transformStyle: "preserve-3d",
                  transform: "rotateY(180deg)",
                }
              : { transformStyle: "preserve-3d" }
          }
        >
          <div
            className="flex flex-col flex-wrap items-center justify-center pl-[20px] absolute w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
            }}
          >
            <Login statusSetter={statusSetter} />
          </div>
          <div
            className="flex flex-col flex-wrap items-center justify-center pl-[20px] absolute w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Register statusSetter={statusSetter} />
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* OVERVIEW PART */}
      <div className="px-[20vw] pt-[15vh] mt-[15vh] mb-[15vh] bg-[rgba(0,0,0,0.3)] z-20">
        <div className="flex flex-col justify-center items-center text-white">
          <div className="text-[1.7rem] border-b border-t py-[5px] px-[50px] mb-[50px]">
            OVERVIEW
          </div>
          <div className="pb-[15vh] z-20">
            "Welcome to the exciting world of matching card games! In these
            engaging and brain-teasing games, your task is to uncover pairs of
            cards with identical images or symbols. Test your memory and
            observation skills as you flip over cards to find matching pairs.
            Keep an eye on the cards you've uncovered to strategically reveal
            the hidden patterns and clear the board. Whether you're enjoying a
            solo session or competing with friends and family, matching card
            games are a fantastic way to challenge yourself while having fun.
            Get ready to shuffle, flip, and match your way to victory!
          </div>
        </div>
      </div>

      {/* NEWS PART */}
      <div className="absolute top-[1380px] left-0 z-[1] opacity-90">
        <img src="/assets/LandingPage/bomb-landingpage.png" alt="" />
      </div>
      <div id="news" className="pb-[20vh] ">
        <div style={{ display: "flex" }} className="z-20">
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[30Vw] bg-[rgba(0,0,0,0.9)]  "
            style={{
              borderRadius: "0px 0px 0px 150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              NEWS
            </p>
          </div>
        </div>
        {news?.map((el, index) => {
          if (index < 8) {
            return <NewsCard title={el.text} key={index}/>;
          } else {
            return null;
          }
        })}
      </div>

      {/* FOOTER PART */}
      <div className="absolute top-[1180px] left-0 z-[-1] opacity-100">
        <img src="/assets/LandingPage/footerhero-01.png" alt="" />
      </div>
      <div className="flex px-[10vw] py-[5vh] bg-[rgba(0,0,0,0.70)]">
        <div className="w-[200px]">
          <img src="/assets/logo/logo-06.png" alt="" />
        </div>
        <div className="text-[white] font-thin px-[40px] text-[12px]flex items-center justify-center">
          <div className="mb-[10px]">
            <div className="text-[10px]">
              <div>flipboom@mail.com</div>
            </div>
            <div className="text-[10px]">
              <div>www.flipboom.co.id</div>
            </div>
          </div>
          <div className="text-[14px] tracking-tight">
            Dive into a world of entertainment and cognitive challenges with our
            collection of flip card games. Test your memory, observation, and
            strategy skills while enjoying hours of fun. Discover a variety of
            themes and levels that will keep you engaged. Explore now and start
            flipping for excitement!
          </div>
        </div>
      </div>
      <div className="text-[white] text-center bg-[rgba(0,0,0,0.90)] py-[3px] w-[100%]">
        FLIPNBOOM
      </div>
    </section>
  );
}
