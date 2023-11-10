import Link from "next/link";
import React from "react";

const Minimenu = () => {
  return (
    <div className="hide">
      <Link href={"/"}>Home </Link>
      <Link href={"/users"}>Patients </Link>
    </div>
  );
};

export default Minimenu;
