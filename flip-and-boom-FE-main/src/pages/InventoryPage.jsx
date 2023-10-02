import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardInventory from "../components/CardInventory.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserSelectedItem } from "../actionCreators";
export default function ShopPage() {
  const navigate = useNavigate();
  const { inventories, profile } = useSelector((state) => state.userReducer);
  const [selectedChar, serSelectedChar] = useState("");
  const [selectedSkin, setSelectedSkin] = useState("");

  const dispatch = useDispatch();
  const generateUrl = (type, item) => {
    if (type === "char") {
      return `/assets/character/${item}.png`;
    } else if (type === "skin") {
      return `/assets/card/${item}.png`;
    }
  };

  useEffect(() => {
    serSelectedChar(profile.selectedChar);
    setSelectedSkin(profile.selectedSkin);
  }, []);

  const handleChange = (type, payload) => {
    if (type === "char") {
      serSelectedChar(payload);
    } else if (type === "skin") {
      setSelectedSkin(payload);
    }
  };

  const handleSave = () => {
    const payload = {
      char: selectedChar,
      skin: selectedSkin,
    };
    dispatch(setUserSelectedItem(payload));
    navigate("/profile");
  };
  return (
    <>
      <section
        id="Shop-Section"
        className="mt-[25px] break-before-page flex flex-col"
      >
        <div className="ml-[30vw] flex">
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[20vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
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
                color: "#fff",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              PROFILE
            </NavLink>
          </div>
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
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
                color: "#fff",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              INVENTORY
            </NavLink>
          </div>
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[1vw] hover:bg-[rgba(2,255,247,0.5)] bg-[#ffb800] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleSave}
          >
            <p
              className="text-lg font-basefont"
              style={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              SAVE
            </p>
          </div>
        </div>
        <div
          id="column-shop"
          className="mt-[2vw] w-[57vw] ml-[32vw] flex flex-wrap"
        >
          {inventories?.map((inv, index) => (
            <CardInventory
              imgUrl={generateUrl(inv?.Item?.type, inv?.Item?.name)}
              itemCategory={inv?.Item?.type}
              itemName={inv?.Item?.name}
              selectedSkin={selectedSkin}
              selectedChar={selectedChar}
              changeSelect={handleChange}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
