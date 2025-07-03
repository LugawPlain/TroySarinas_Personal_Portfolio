import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full bg-gray-100 text-gray-800">
      <div className="max-w-[794px] mx-auto">
        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30">
          <div className="flex flex-col h-full justify-end w-full mb-5 ">
            <div className="w-[250px] h-[250px] bg-gray-400 flex items-center justify-center text-[10px] text-white p-1 text-center leading-tight"></div>
            <h3 className="text-4xl  font-bold  mb-1 leading-tight">
              Doors to the World, Inc.
            </h3>
            <h1 className="text-7xl font-bold text-blue-700 mb-0 leading-tight">
              Business Plan
            </h1>
            <p className="mt-4 mb-20 text-sm  leading-tight">
              <span className="font-bold text-lg">Prepared</span>
              <br />
              <br />
              February 11, 2020
            </p>

            <div className="flex w-full mb-30">
              <div className="flex-1 text-sm leading-relaxed ">
                <h3 className="text-lg  mb-1 font-bold">Contact information</h3>
                <p className="m-0 p-0">Jonathan Wright, President</p>
                <p className="m-0 p-0">519-555-2020</p>
                <p className="m-0 p-0">info@doorstotheworld.ca</p>
                <p className="m-0 p-0">www.doorstotheworld.ca</p>
              </div>

              <div className="flex-1 text-sm leading-relaxed  pl-[40px]">
                <h3 className="text-lg  mb-1 font-bold">Business address</h3>
                <p className="m-0 p-0">2020 Summerhill Drive</p>
                <p className="m-0 p-0">Suite No. 203</p>
                <p className="m-0 p-0">New Barton, ON N20 1T1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <h1 className="text-[40px] font-bold text-blue-700 mt-8 mb-5">
            Executive summary
          </h1>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Project objectives
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Increase sales over five years, primarily to export market (New
                England), Eastern Quebec and British Columbia.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Goal to achieve 50% of gross sales from exports within five
                years, while continuing to develop domestic sales.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Business description
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Manufacturer of high-end, custom wooden doors and windows for
                residential construction and the remodelling market.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Windows and doors are inlaid with fine glass etchings and brass
                inlays
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Located in New Barton, ON since 1987.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Launched as a family business. Started with wood-framed doors
                and windows for local builders north of Toronto, with a small
                workshop.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Demand for custom French doors and manufacture of heritage
                windows and doors for retrofit boomed in the late 1990s. Opened
                a manufacturing facility in 1998.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">30 employees.</li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Company began selling to the new home market in 1988, but in
                response to changes in market—now a leading supplier to
                superstores, contractors and building supply dealers in the
                upscale renovation market.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Products and services
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Custom French doors and windows for retrofits make up 80% of
                business.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Interior doors with sound-proof insulated glass make up 20% of
                business
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Financing need
            </h3>
            <h4 className="font-bold  text-md">
              Current sales are $4.5 million
            </h4>
            <div className="w-1/2 h-20 bg-gray-500">
              <img></img>
            </div>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Key people
            </h3>
            <div>
              <h4 className=" font-bold">
                Jonathan Wright, President (70% ownership){" "}
              </h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  41-years-old. More than 20 years’ experience in construction
                  industry, 12 as an independent building contractor.
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Main responsibilities: marketing, business planning and
                  financial operations.
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" font-bold">
                David Wright, Chief Operating Officer (30% ownership){" "}
              </h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  38-years-old. 11 years’ experience in operations of
                  manufacturing site. BA University of Western Ontario
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Main responsibilities: production scheduling, purchasing,
                  sales invoicing and office management
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Risk assessment and contigency plan
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                LFrequent training of current, long-term staff to upgrade skills
                and allow them to be cross-functional.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                U.S. is a growing market, but we must compete with local and
                established firms
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Establishing experienced distribution partners in New England.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnering with renovation retailers to use local warehousing
                for bulk shipping and get priority pricing
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                If sales targets aren’t met, equipment can be sold back to the
                supplier
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <h1 className="text-7xl font-bold text-blue-700 mb-5">01.</h1>
          <h1 className="text-5xl font-bold  mb-5">Business Overview</h1>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Business description
            </h3>
            <div>
              <h4 className=" font-bold">
                Jonathan Wright, President (70% ownership){" "}
              </h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  41-years-old. More than 20 years’ experience in construction
                  industry, 12 as an independent building contractor.
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Main responsibilities: marketing, business planning and
                  financial operations.
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" font-bold">
                David Wright, Chief Operating Officer (30% ownership){" "}
              </h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  38-years-old. 11 years’ experience in operations of
                  manufacturing site. BA University of Western Ontario
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Main responsibilities: production scheduling, purchasing,
                  sales invoicing and office management
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Mission,vision,values
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                <span className="text-blue-500">Mission: </span>Partnered with
                local trade colleges to launch apprenticeship program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                <span className="text-blue-500">Vission: </span>Partnered with
                local trade colleges to launch apprenticeship program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                <span className="text-blue-500">Values: </span>Partnered with
                local trade colleges to launch apprenticeship program
              </li>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  LFrequent training of current, long-term staff to upgrade
                  skills and allow them to be cross-functional.
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  U.S. is a growing market, but we must compete with local and
                  established firms
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Establishing experienced distribution partners in New England.
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnering with renovation retailers to use local warehousing
                  for bulk shipping and get priority pricing
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  If sales targets aren’t met, equipment can be sold back to the
                  supplier
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Industry overview and trends
            </h3>

            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                41-years-old. More than 20 years’ experience in construction
                industry, 12 as an independent building contractor.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Main responsibilities: marketing, business planning and
                financial operations.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                38-years-old. 11 years’ experience in operations of
                manufacturing site. BA University of Western Ontario
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Main responsibilities: production scheduling, purchasing, sales
                invoicing and office management
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                41-years-old. More than 20 years’ experience in construction
                industry, 12 as an independent building contractor.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Main responsibilities: marketing, business planning and
                financial operations.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                38-years-old. 11 years’ experience in operations of
                manufacturing site. BA University of Western Ontario
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Main responsibilities: production scheduling, purchasing, sales
                invoicing and office management
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Technological trends
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                LFrequent training of current, long-term staff to upgrade skills
                and allow them to be cross-functional.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                U.S. is a growing market, but we must compete with local and
                established firms
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Establishing experienced distribution partners in New England.
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnering with renovation retailers to use local warehousing
                for bulk shipping and get priority pricing
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                If sales targets aren’t met, equipment can be sold back to the
                supplier
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Government regulations
            </h3>
            <h4 className=" text-lg">Data Stewardship</h4>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h4 className=" text-lg">Trade agreements</h4>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" text-lg">Environmental regulations</h4>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              The market
            </h3>
            <div>
              <h4 className=" text-lg">Overview of market trends</h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" text-lg"> Target market</h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h4 className=" text-lg">Products and services </h4>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              The competition
            </h3>
            <div>
              <h4 className=" text-lg">Competitors and types of competition</h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" text-lg">
                {" "}
                Competitors’ strengths and weaknesses
              </h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" text-lg">
                {" "}
                Competitive advantage and differentiator
              </h4>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <h1 className="text-7xl font-bold text-blue-700 mb-5">02.</h1>
          <h1 className="text-5xl font-bold  mb-5">Sales and marketing</h1>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Customers
            </h3>
            <div className="w-full h-50 bg-gray-500"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Suppliers
            </h3>
            <div className="w-full h-50 bg-gray-500"></div>
            <p className="">Additional Information</p>
            <p className="">
              Me2U Internet Service & Security at 775 Grant St., Orangeville,
              ON, offers combined internet, web hosting, and data security/IT
              consulting.{" "}
            </p>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Advertising and promotion
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Pricing and distribuition
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Customer service policiy and warranties
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <h1 className="text-7xl font-bold text-blue-700 mb-5">03.</h1>
          <h1 className="text-5xl font-bold  mb-5">Operating Plan</h1>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Business Location
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Equipment
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Technology requirments and investment need
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Business Location
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <h1 className="text-7xl font-bold text-blue-700 mb-5">04.</h1>
          <h1 className="text-5xl font-bold  mb-5">Action Plan</h1>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Description of the management team
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Description of advisory team
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
                <li className="text-sm leading-relaxed  mb-1.5">
                  Shortage of skilled tradespeople in Ontario makes it difficult
                  to recruit new employees
                </li>
              </ul>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <ul className="list-disc ml-6 mt-0 mb-5">
                <li className="text-sm leading-relaxed  mb-1.5">
                  Partnered with local trade colleges to launch apprenticeship
                  program
                </li>
              </ul>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Key employees
            </h3>
            <div className="w-full h-40 bg-gray-500"></div>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <h1 className="text-7xl font-bold text-blue-700 mb-5">05.</h1>
          <h1 className="text-5xl font-bold  mb-5">Action Plan</h1>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Project objectives
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Resources required
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Action Plan
            </h3>
            <div className="w-full h-60 bg-gray-500"></div>
            <p className="">Additional Information</p>
            <p className="">
              Over 2-3 years, all activities will be integrated with marketing
              strategy, including development of new markets, product launch and
              distribution.{" "}
            </p>
          </div>
        </div>

        <div className="bg-white w-full h-[1123px] px-12 pb-20 pt-30 mt-10">
          <div>
            <h3 className="text-2xl font-bold  mt-6 mb-2.5 border-b border-gray-300 pb-1.5">
              Risk assessment and contingencies
            </h3>
            <ul className="list-disc ml-6 mt-0 mb-5">
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Partnered with local trade colleges to launch apprenticeship
                program
              </li>
              <li className="text-sm leading-relaxed  mb-1.5">
                Shortage of skilled tradespeople in Ontario makes it difficult
                to recruit new employees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
