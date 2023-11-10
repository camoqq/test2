import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { BiMoney } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { BiUpArrowAlt } from "react-icons/bi";
import "../sharedCSS.css";

const Numbers = () => {
  return (
    <div className="top">
      <div className="box">
        <div className="detail">
          <div className="left">
            <span>458</span>
            <span>Appointments</span>
            <div className="l3">
              <span>32 </span>
              <span>% higher</span>
            </div>
          </div>
          <div className="right">
            <BsBook />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="detail">
          <div className="left">
            <span>$ 89340</span>
            <span>Total Income</span>
            <div className="l3">
              <span>57 </span>
              <span>% higher</span>
            </div>
          </div>
          <div className="right">
            <BiMoney />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="detail">
          <div className="left">
            <span>374</span>
            <span>New Users</span>
            <div className="l3">
              <span>24 </span>
              <span>% higher</span>
            </div>
          </div>
          <div className="right">
            <FiUserPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
