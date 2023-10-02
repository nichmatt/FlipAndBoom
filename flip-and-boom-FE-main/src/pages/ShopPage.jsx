import { useEffect, useState } from "react";
import CardShop from "../components/CardShop";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuccesPayment } from "../actionCreators/payment";
import { fetchShopData, setResponseMessage } from "../actionCreators";
import { actionFilterShopData } from "../actionCreators/fetchShop";
import { NavLink } from "react-router-dom";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.paymentReducer);

  const [page, setPage] = useState("all");

  const handleOnSucces = (result) => {
    const { gross_amount, order_id, status_code } = result;

    let topupBalance = "";
    switch (gross_amount) {
      case "16000.00":
        topupBalance = 16;
        break;
      case "31000.00":
        topupBalance = 32;
        break;
      case "61000.00":
        topupBalance = 64;
        break;
    }
    let newAmount = gross_amount.split(".")[0];
    const payloadDispatch = {
      amount: newAmount,
      topupBalance: topupBalance,
      status: status_code == 200 ? "success" : "cancel",
      orderId: order_id,
    };
    dispatch(fetchSuccesPayment(payloadDispatch));
  };

  const { datas, filter } = useSelector((state) => state.fetchShopReducer);

  const handlePay = (tokenMidtrans) => {
    snap.pay(tokenMidtrans, {
      onSuccess: function (result) {
        handleOnSucces(result);
      },
      onPending: function (result) {
        handleOnSucces(result);
      },
      onError: function (result) {
        handleOnSucces(result);
      },
      onClose: function () {
        dispatch(setResponseMessage('Payment cancel'))
      },
    });
  };

  useEffect(() => {
    if (token) {
      handlePay(token);
    }
  }, [token]);

  useEffect(() => {
    dispatch(fetchShopData());
  }, []);

  function handleCharacter() {
    setPage("character");
    const character = datas?.filter((type) => {
      return type.type === "char" && type.name !== "default";
    });
    dispatch(actionFilterShopData(character));
  }

  function handleSkin() {
    const skin = datas.filter((type) => {
      setPage("card");
      return type.type === "skin" && type.name !== "default";
    });
    dispatch(actionFilterShopData(skin));
  }

  function showAll() {
    setPage("all");
    dispatch(actionFilterShopData([]));
  }

  return (
    <>
      <section
        id="Shop-Section"
        className="mt-[25px] break-before-page flex flex-col"
      >
        <div className="ml-[30vw] flex pl-[25vw]">
          <NavLink
            className={
              page === "character"
                ? "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] duration-300"
                : "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleCharacter}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              CHARACTERS
            </p>
          </NavLink>
          <div
            className={
              page === "card"
                ? "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] duration-300"
                : "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleSkin}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              CARDS
            </p>
          </div>
          <div
            className={
              page === "all"
                ? "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(2,255,247,0.5)] duration-300"
                : "h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            }
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={showAll}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              ALL
            </p>
          </div>
        </div>
        <div
          id="column-shop"
          className="mt-[2vw] w-[57vw] ml-[32vw] flex flex-wrap"
        >
          <CardShop
            imgUrl="/assets/voucher/16.png"
            itemName="16 Points"
            itemCategory="VOUCHER"
            itemPrice="IDR 16.000"
            type={"balance"}
          />
          <CardShop
            imgUrl="/assets/voucher/32.png"
            itemName="32 Points"
            itemCategory="VOUCHER"
            itemPrice="IDR 31.000"
            type={"balance"}
          />
          <CardShop
            imgUrl="/assets/voucher/64.png"
            itemName="64 Points"
            itemCategory="VOUCHER"
            itemPrice="IDR 61.000"
            type={"balance"}
          />
          {filter.length
            ? filter?.map((item) => {
                return (
                  <CardShop
                    key={item.id}
                    imgUrl={`/assets/shops/${item.name}.png`}
                    itemId={item?.id}
                    itemName={item.name}
                    itemCategory={item.type}
                    itemPrice={`${item.price}`}
                    type={"item"}
                  />
                );
              })
            : datas?.map((item) =>
                item.name !== "default" ? (
                  <CardShop
                    key={item.id}
                    imgUrl={`/assets/shops/${item.name}.png`}
                    itemId={item?.id}
                    itemName={item.name}
                    itemCategory={item.type}
                    itemPrice={`${item.price}`}
                    type={"item"}
                  />
                ) : (
                  ""
                )
              )}
        </div>
      </section>
    </>
  );
}
