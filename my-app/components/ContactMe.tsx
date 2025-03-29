import React from "react";

const ContactMe = () => {
  return (
    <div className="mt-16 ">
      <div className=" space-y-5 py-4 px-2 text-foreground ">
        <h3 className="text-4xl tracking-tighter word-spacing font-serif font-extrabold text-center">
          Let's get that project Started!!
        </h3>
        {/* <p className="text-sm text-foreground/80">
          Conteact me now alsdaskdlakdlawkdlaksd
        </p> */}
        <div className="flex-center">
          <button className="text-2xl text-nowrap text-card-foreground mx-auto bg-card px-6 py-2 rounded-lg">
            Get Started 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
