import React from "react";
import "./Headerstyle.css";
import bakerySwap from "../img/bakery_swap.svg";
import logo from "../img/logo_white.b1858a79.svg";
import { FaBars, FaCog } from "react-icons/fa";
import { Connectwallet } from "./Connectwallet";

export const Header = ({ wallet, connect, connecting }) => {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="header-inner" style={{ alignItems: "center" }}>
          <div className="leftside-icons">
            <div className="menu-bar">
              <FaBars size="22px" color="#ac562a" />
            </div>

            <a href="#" className="logo">
              <div className="picture-logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="wording-logo">
                <img
                  src={bakerySwap}
                  alt="BakerySwap"
                  style={{
                    marginLeft: "5px",
                    marginTop: "0",
                    height: "20px",
                  }}
                />
              </div>
            </a>
          </div>

          <div className="rightside-icons">
            <div className="wallet-connect">
              <div className="ethereum">
                <p className="eth"> ETH </p>
              </div>

              <div className="connect" style={{ pointerEvents: "auto" }}>
                <p
                  className="hyphen"
                  style={{ flexShrink: "0", fontFamily: "Inter, sans-serif" }}
                >
                  {" "}
                  -{" "}
                </p>

                <Connectwallet
                  wallet={wallet}
                  connecting={connecting}
                  connect={connect}
                />
              </div>

              <div className="settings">
                <div className="setting-icon">
                  <button className="setting-btn">
                    <FaCog size="20px" color="#ac562a" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
