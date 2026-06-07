import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-12 bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="w-full px-4 md:px-20 my-16">
          <div className="items-center justify-center flex flex-col">
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
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2026 Your Company. All rights reserved
              </p>
              <p className="text-sm">Developed by Tanmoy❤️Mana</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
