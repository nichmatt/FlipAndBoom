import NewsCard from "../components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../actionCreators/news";

export default function NewsPage() {
  const dispatch = useDispatch();

  const { news } = useSelector((state) => state.newsReducer);
  useEffect(() => {
    dispatch(fetchNews());
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
          className="h-[50px] w-[120px] mt-[6vw] ml-[30Vw] bg-[rgba(0,0,0,0.50)]"
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
      {news?.map((n) => (
        <NewsCard title={n?.title} newsId={n?.id} key={n?.id} text={n?.text} />
      ))}
    </section>
  );
}
