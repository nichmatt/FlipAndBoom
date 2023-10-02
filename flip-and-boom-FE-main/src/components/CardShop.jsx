// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuyItem, fetchGetTokenMidtrans } from "../actionCreators/payment";
import { setErrorMessage } from "../actionCreators";
export default function CardShop({
  imgUrl,
  itemName,
  itemCategory,
  itemPrice,
  itemId,
  type,
}) {
  const dispatch = useDispatch();

  const { inventories, profile } = useSelector((state) => state.userReducer);

  const checkOwnedItem = () => {
    return inventories ? inventories.some((el) => el.Item.id == itemId) : null;
  };

  const handleClickCard = (e) => {
    if (type === "balance") {
      dispatch(fetchGetTokenMidtrans(itemPrice.split(" ")[1].replace(".", "")));
    } else if (type === "item" && checkOwnedItem() === false) {
      if (profile.balance < itemPrice) {
        dispatch(setErrorMessage("Not Enough Balance"));
      } else {
        const payload = {
          ItemId: itemId,
          price: null,
        };
        dispatch(fetchBuyItem(payload));
      }
    }
  };

  return (
    <section
      className={`w-[250px] h-[325px] bg-[rgba(0,0,0,0.3)] rounded-[5px] m-[10px] hover:bg-[rgba(231,231,231,0.3)] duration-300 hover:scale-[1.05] relative ${
        checkOwnedItem() ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleClickCard}
    >
      <img
        src={imgUrl}
        alt="item-image"
        className="max-w-[75%] m-auto p-[10px] pt-[30px] max-h-[200px] "
      />
      <p className="text-white font-semibold italic text-center text-xl mb-[2vh]">
        {itemName}
      </p>
      <div id="price" className="flex justify-center ">
        <div className="text-center text-white italic font-semibold text-xs ml-[20px] mr-[5px]  bg-[rgba(0,0,0,0.3)] px-[15px] flex items-center">
          {itemCategory}
        </div>
        <p className="text-white px-[5px]">|</p>
        {itemPrice?.substring(0, 3) !== "IDR" && (
          <i
            className="fa-solid fa-money-bill-1-wave text-[#ffb800] pt-[8px] ml-[5px] "
            style={{ textShadow: "0.5px 0.1px 5px" }}
          ></i>
        )}

        <p
          style={{ textShadow: "1px 1px 10px" }}
          className="pr-[30px] pl-[10px] py-[3px] text-[#ffb800] italic font-semibold text-[0.8rem]"
        >
          {itemPrice}
        </p>
      </div>
      {type === "item" && checkOwnedItem() ? (
        <div className="absolute w-full h-full top-0 flex justify-center items-center">
          <span className="text-white text-6xl font-extrabold text-center rotate-45 opacity-50 uppercase">
            Owned
          </span>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
