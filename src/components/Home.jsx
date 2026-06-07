import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped, Typed } from "react-typed";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Element name="home">
        <div className="w-full min-h-screen px-4 md:px-20 pt-24 flex items-center">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-3">
              <span className="text-xl">Welcome In My Feed</span>
              <div className="flex space-x-1 text-2xl md:text-4xl">
                <h1>Hello, I'm a</h1>
                {/* <span className="text-red-700 font-bold">Developer</span> */}
                <ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />
              <p className="text-sm md:text-md text-justify">
                I am a passionate MERN Stack Developer with experience in
                building responsive and user-friendly web applications using
                MongoDB, Express.js, React.js, and Node.js. I enjoy creating
                modern, scalable, and efficient solutions while continuously
                learning new technologies to improve my development skills.
              </p>
              <br />
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between ">
                <div className="space-y-2">
                  <h1 className="font-bold text-center">Available on</h1>
                  <ul className="flex space-x-5">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareFacebook className="text-2xl cursor-pointer hover:text-blue-600 hover:scale-110 duration-200" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/tanmoy-mana-ba253833b"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 hover:scale-110 duration-200" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 hover:scale-110 duration-200" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/manatanmoy523-cell"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubSquare className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold">Currently Working on</h1>
                  <div className="flex space-x-5">
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:mt-12 mt-0 md:ml-20 ml-0">
              <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-950 to-fuchsia-800">
                <img
                  src="/profile3.jpeg"
                  alt="Profile"
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </Element>
    </>
  );
};

export default Home;
