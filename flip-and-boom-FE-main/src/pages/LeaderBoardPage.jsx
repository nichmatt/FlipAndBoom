import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderboard } from "../actionCreators/fetchLeaderboard";
import { actionFilterLeaderboardData } from "../actionCreators/fetchLeaderboard";

export default function LeaderBoardPage() {
  const dispatch = useDispatch();
  const { data, filter } = useSelector((state) => state.getLeaderboardReducer);
  const [difficulty, setDifficulty] = useState("easy");

  const [page, setPage] = useState("easy");

  async function handleChange(difficult) {
    setDifficulty(difficult);
    setPage(difficult);
    await dispatch(getLeaderboard(difficult));
  }

  useEffect(() => {
    dispatch(getLeaderboard(difficulty));
  }, []);

  return (
    <>
      <section
        className="min-h-[100vh] w-[100vw] "
        style={{
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            className={
              page === "easy"
                ? "ml-[58%] h-[50px] w-[120px] mt-[6vw]  bg-[rgba(2,255,247,0.5)] duration-300"
                : "ml-[58%] dh-[50px] w-[120px] mt-[6vw]  bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleChange("easy")}
          >
            <p
              style={{
                fontSize: "14px",

                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              EASY
            </p>
          </div>
          <div
            className={
              page === "medium"
                ? "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] duration-300"
                : "dh-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleChange("medium")}
          >
            <p
              style={{
                fontSize: "14px",

                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              MEDIUM
            </p>
          </div>
          <div
            className={
              page === "hard"
                ? "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] duration-300"
                : "dh-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleChange("hard")}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              HARD
            </p>
          </div>
          <div
            className={
              page === "impossible"
                ? "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] duration-300"
                : "dh-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => handleChange("impossible")}
          >
            <p
              style={{
                fontSize: "14px",

                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              IMPOSSIBLE
            </p>
          </div>
        </div>

        <div
          className="w-[63vw] mt-[1vw] ml-[30vw] py-[10px]"
          style={{
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          }}
        >
          <table className="w-[90%] mx-auto my-[40px] ">
            <thead>
              <tr className="text-white font-normal border-b mb-[200px]">
                <th className="pb-3">RANK</th>
                <th className="pb-3">NAME</th>
                <th className="pb-3">GAME MODE</th>
                <th className="pb-3">POINT</th>
              </tr>
            </thead>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <tbody>
              {data.map((el, index) => {
                return el[`${difficulty}Score`] !== null ? (
                  <tr className="hover:bg-[rgba(2,255,247,0.5)] text-center duration-300 " key={index}>
                    <td className="py-5 border-b border-[#20203E] text-slate-50 ">
                      {index + 1}
                    </td>
                    <td className="py-5 border-b border-[#20203E] text-slate-50 ">
                      {el.username}
                    </td>
                    <td className="py-5 border-b border-[#20203E] text-slate-50 ">
                      {difficulty.toUpperCase()}
                    </td>
                    <td className="py-5 border-b border-[#20203E] text-slate-50 ">
                      {el[`${difficulty}Score`]}
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
          <div></div>
        </div>
      </section>
    </>
  );
}
