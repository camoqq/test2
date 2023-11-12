import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";
import "../sharedCSS.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <Link href={"/"} className="link">
          <span>
            <RxDashboard size={40} />
          </span>
          {/* <span> Home</span> */}
        </Link>
      </div>
      <div>
        <Link href={"/users"} className="link">
          <span>
            <HiUsers size={40} />
          </span>
          {/* <span>Patients</span> */}
        </Link>
      </div>
    </div>
  );
}
