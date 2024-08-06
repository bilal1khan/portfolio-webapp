import React, { useEffect, useState } from "react";
import TitleImg from "../assets/contact-1.jpg";


import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Title = () => {
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prevTitle) => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        return roles[index];
      });
    }, 2000);

    return () => clearInterval(interval); 
  }, [index]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-[-24px]">
      <div className="flex-wrap mx-auto px-12 space-between h-1/2 grid md:grid-cols-2">
        
        <div className="left flex-1 my-auto mx-8 p-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-500 text-left">
            Hi There!👋🏻
          </h1>
          <h2 className="text-5xl font-semibold mb-4 text-blue-500">
            I'M Bilal
          </h2>
          <h3 className="text-3xl font-semibold mb-4 mt-8 text-blue-600">
            {title} 
            <span className="ml-2 text-blue-500 animate-pulse">|</span>{" "}
            
          </h3>
        </div>
        
        <div className="right flex-1 text-center">
          <img src={TitleImg} className="object-fill w-3/4 mx-auto " />
        </div>
        
      </div>

    </div>
  );
};

export default Title;
