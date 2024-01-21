import React from "react";
import GradientText from "./GradientText";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  LinkedinIcon,
  Twitch,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Socials = () => {
  const socialLinks = [
    {
      link: "",
      img: <Facebook />,
    },
    {
      link: "",
      img: <LinkedinIcon />,
    },
    {
      link: "",
      img: <Twitter />,
    },
    {
      link: "",
      img: <Twitch />,
    },
    {
      link: "",
      img: <Instagram />,
    },
  ];

  const content = (
    <>
      <GradientText className="tracking-wide text-xl font-semibold">
        Have you project in mind?
      </GradientText>
      <p className="tracking-wide font-semibold text-5xl">
        Let’s Make Something Great Together!
      </p>

      <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-10 cursor-pointer">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base">
          CONTACT WITH US
          <div>
            <ArrowUpRight />
          </div>
        </div>
      </div>
      <Image
        src="/logo.svg"
        height={80}
        width={80}
        alt="logo"
        className="mt-16"
      />

      <div className="flex justify-center items-start w-full h-full ">
        {socialLinks.map((socialLink) => (
          <div key={socialLink.link} className="m-10">
            {socialLink.img}
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12 h-full w-full ">
      {content}
    </div>
  );
};

export default Socials;
