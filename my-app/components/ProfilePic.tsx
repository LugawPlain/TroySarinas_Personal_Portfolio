import React from "react";
import Image from "next/image";
const ProfilePic = () => {
  return (
    <>
      <div className="w-[55px] h-[54px] rounded-full bg-black content-center ">
        <Image
          src="/Icons/Troy_Sarinas_Pfp.jpg"
          width={50}
          height={50}
          alt="Troy Sarinas Pfp"
          className="rounded-full mx-auto"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ProfilePic;
