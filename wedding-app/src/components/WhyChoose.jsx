import React from "react";
import Choose from "./Choose";
import Title from "./Title";
import {BiNetworkChart} from 'react-icons/bi';
import {FcPlanner} from 'react-icons/fc';
import {HiOutlineInboxStack} from 'react-icons/hi2'

export default function WhyChoose() {
  return (
    <div id="choose">
      <Title
        text={"Why Choose DA WEDDING WHISPER?"}
        titleStyle={"choosetitle"}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        <Choose
          icon={<BiNetworkChart />}
          heading={"Extensive Venue Network Find the Perfect Setting"}
          description={
            "Discover a wide range of wedding venues through Da Wedding Whisper's extensive network. We offer diverse options to suit different styles and budgets, ensuring you find the perfect setting for your special day."
          }
        />
        <Choose
        icon={<FcPlanner />}
          heading={"Stress-Free Planning Seamless Experience"}
          description={
            "Enjoy a stress-free wedding planning experience with Da Wedding Whisper. Our expert team takes care of venue recommendations, booking arrangements, and other requirements, ensuring a seamless process from start to finish."
          }
        />
        <Choose
         icon={<HiOutlineInboxStack />}
          heading={"Trusted Partnerships Quality and Reliability"}
          description={
            "Da Wedding Whisper has built trusted partnerships with top-notch wedding venues. We ensure quality and reliability by working with reputable establishments, providing you with peace of mind and confidence in the venues we recommend and book for your wedding day"
          }
        />
      </div>
    </div>
  );
}
