import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MainPage() {
  const [couponData, setCouponData] = useState([]);
  const [valueSearched, setValueSearched] = useState("");

  const getData = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_URL1}}`);
      let ans = data.data.pairs.sort((a, b) => a.priceUsd - b.priceUsd);
      setCouponData(ans);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const debounce = async (e) => {
    setValueSearched(e.target.value);
    let newCouponData = couponData.filter((el) => {
      if (el.baseToken.name === e.target.value) {
        return;
      }
    });
    setCouponData(newCouponData);
  };
  console.log("Coupin length", couponData.length);
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.57)",
        backgroundImage: `url("https://i.ibb.co/VBMTrtz/wallpaperflare-com-wallpaper.jpg")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Search Here"
          value={valueSearched}
          onChange={debounce}
        />
        <fa-search />
      </div>
      {couponData?.map((el) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "30px",
            gridTemplateRows: "301px",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              background: "#390554",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
            }}
          >
            <h5 style={{ display: "flex", justifyContent: "start" }}>
              Basic info
            </h5>
            <div style={{ width: "90%", margin: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Pair Created At</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el.baseToken.name}</h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Symbol </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.baseToken?.symbol} </h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>DEX ID </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.dexId} </h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5> Pair Address </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                    // overflow: "auto",
                  }}
                >
                  <h5>{el?.pairAddress.slice(0, 5)} </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: "10px",
              background: "#390554",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
            }}
          >
            <h5 style={{ display: "flex", justifyContent: "start" }}>
              Base Token
            </h5>
            <div style={{ width: "90%", margin: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Name</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el.baseToken.name}</h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Symbol </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.baseToken?.symbol} </h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Address</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.dexId} </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: "10px",
              background: "#390554",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
            }}
          >
            <h5 style={{ display: "flex", justifyContent: "start" }}>
              Quote Token
            </h5>
            <div style={{ width: "90%", margin: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Name</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el.baseToken.name}</h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Symbol </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.baseToken?.symbol} </h5>
                </div>
              </div>
              {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>DEX ID </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.dexId} </h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5> Pair Address </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                    // overflow: "auto",
                  }}
                >
                  <h5>{el?.pairAddress.slice(0, 5)} </h5>
                </div>
              </div> */}
            </div>
          </div>
          <div
            style={{
              borderRadius: "10px",
              background: "#390554",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
            }}
          >
            <h5 style={{ display: "flex", justifyContent: "start" }}>Price</h5>
            <div style={{ width: "90%", margin: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Price Native</h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el.priceNative}</h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>Price USD </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.priceUsd} </h5>
                </div>
              </div>
              {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>DEX ID </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5>{el?.dexId} </h5>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                  }}
                >
                  <h5> Pair Address </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "160px",
                    // overflow: "auto",
                  }}
                >
                  <h5>{el?.pairAddress.slice(0, 5)} </h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
