import React from "react";
import Round from "../assets/Images/Round.svg";
import { FaArrowRight } from "react-icons/fa";

const OurSubs = () => {
  const SubModel = [
    {
      key: 1,
      Id: "st1",
      name: "Basic Plan",
      developmentCost: "$799",
      monthlyMaintenanceCost: "$99",
      description: {
        short: "A cost-effective solution for small businesses.",
        long: "The Basic Plan is a cost-effective solution for small businesses that need regular updates and basic security for their website. It includes website updates, monthly backups, and basic security monitoring. This plan is perfect for businesses that are just starting out or have simple website needs.",
      },
    },
    {
      key: 2,
      Id: "nd2",
      name: "Advanced Plan",
      developmentCost: "$1099",
      monthlyMaintenanceCost: "$149",
      description: {
        short: "Enhanced features for growing businesses.",
        long: "The Advanced Plan offers enhanced features for growing businesses. In addition to all the features of the Basic Plan, it includes weekly website backups, advanced security monitoring, and SEO optimization. This plan is ideal for businesses that are expanding and need a website that can grow with them.",
      },
    },
    {
      key: 3,
      Id: "rd3",
      name: "Premium Plan",
      developmentCost: "$1499",
      monthlyMaintenanceCost: "$199",
      description: {
        short: "Comprehensive maintenance for large businesses.",
        long: "The Premium Plan offers comprehensive maintenance for large businesses or with significant web traffic. It includes all the features of the Advanced Plan, Plus Premium security monitoring, SEO tracking and priority support. This plan is the best choice for businesses need the highest level of service.",
      },
    },
  ];

  return (
    <div className="flex gap-12 justify-center pb-14 flex-col">
      <span className="w-[40%] pl-12">
        <h2 className="text-4xl font-bold">
          Discover Our Different Subscription Models
        </h2>
        <p className="text-xl font-medium w-[100%] mt-6 ">
          Our Unique Subscription Models help Future-First Companies to
          radically differentiate & deliver on growth throughout their journey.
        </p>
      </span>
      <div className="flex items-center w-full">
        {SubModel.map((item) => (
          <div
            className="border-[1px] border-gray-600 w-[30rem] ml-6 overflow-hidden mt-4 SubCardHover duration-700 hover:bg-black bg-slate-100 hover:text-white"
            key={item.key}
            id={item.Id}
          >
            <img src={Round} className="-mt-40 -rotate-45 duration-1000 mb-8" />
            <span className="flex flex-col">
              <h2 className="text-3xl font-bold pl-4">{item.name}</h2>
              <p className="text-base  my-2 pl-6 pr-7">
                {item.description.long}
              </p>
              <p className="pl-6">
                Development Cost
                <span className="font-semibold">
                  {" "}
                  :- {item.developmentCost}
                </span>
              </p>
              <p className="pl-6">
                Monthly maintenance cost
                <span className="font-semibold">
                  {" "}
                  :-
                  {item.monthlyMaintenanceCost}
                </span>
              </p>
              <br />
              <a
                href="google.com"
                className="flex gap-4 items-center text-left text-xl mx-8 mb-8 duration-500 hover:gap-10"
              >
                Discover {item.name}
                <FaArrowRight />
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSubs;
