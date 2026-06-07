import React from "react";
import { Element } from "react-scroll";
const bookstore = "/bookstore.png";
const learnstack = "/learnStack.png";
const note_taking = "/note_taking_pj.png";
const stopwatch = "/stopwatch.png";
const Project = () => {
  const cardItem = [
    {
      id: 1,
      logo: learnstack,
      name: "LearnStack",
      desc: "Responsive Book Selling App",
      video:
        "https://drive.google.com/file/d/1PVgnm8yibrWEtpL2bdYcfBwQSApKcbew/view?usp=sharing",
      source: "https://github.com/manatanmoy523-cell/LearnStack",
    },
    {
      id: 2,
      logo: bookstore,
      name: "BookStore",
      desc: "Simple Book Store App",
      video:
        "https://drive.google.com/file/d/1j-fG3erqwnJQ6r3XrNChU_vIk7_qL6mG/view?usp=sharing",
      source: "https://github.com/manatanmoy523-cell/BookStore-App",
    },
    {
      id: 3,
      logo: note_taking,
      name: "Note-Taking",
      desc: "Responsive Note Taking App",
      video:
        "https://drive.google.com/file/d/19Gd07-Gal-1gcpXijepIcR1DFtY2VWAf/view?usp=sharing",
      source: "https://github.com/manatanmoy523-cell/Note-Taking-only-React-",
    },
    {
      id: 4,
      logo: stopwatch,
      name: "StopWatch",
      desc: "Simple Stop Watch",
      video: "###",
      source: "https://github.com/manatanmoy523-cell/stopwatch",
    },
  ];
  return (
    <>
   <Element name="projects">
       <div className="w-full px-4 md:px-20 my-16 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">Projects</h1>
          <span className="underline font-semibold">My Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {cardItem.map(({ id, logo, name, desc, video, source }) => (
              <div
                key={id}
                className="border rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-xl font-bold">{name}</h2>
                  <p className="text-gray-600 mt-2">{desc}</p>

                  <div className="flex justify-between mt-4">
                    <a href={video} target="_blank" rel="noopener noreferrer">
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer">
                        Video
                      </button>
                    </a>

                    <a href={source} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <hr />
   </Element>
    </>
  );
};

export default Project;
