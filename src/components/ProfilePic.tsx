import React from "react";
import Image from "next/image";
const ProfilePic = () => {
  return (
    <>
      <div className="w-[50px] h-[50px] rounded-sm overflow-hidden bg-black content-center ">
        <Image
          src="/Icons/Troy_Sarinas_Pfp.jpg"
          width={50}
          height={50}
          alt="Troy Sarinas Pfp"
          className="mx-auto"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ProfilePic;
