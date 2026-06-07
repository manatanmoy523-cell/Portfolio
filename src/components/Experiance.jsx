import React from "react";
import { Element } from "react-scroll";
const html = "/html.png";
const js = "/js.png";
const mon = "/mon.png";
const tailwind = "/tail.png";
const node = "/node.png";
const ex = "/ex.png";
const react = "/react.png";
const java = "/java.png";
const py = "/py.jpg";
const spring = "/spring.png";
const Experiance = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: js,
      name: "Javascript",
    },
    {
      id: 3,
      logo: mon,
      name: "MongoDB",
    },
    {
      id: 4,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 5,
      logo: node,
      name: "Node JS",
    },
    {
      id: 6,
      logo: ex,
      name: "Express JS",
    },
    {
      id: 7,
      logo: react,
      name: "React JS",
    },
    {
      id: 8,
      logo: java,
      name: "Java",
    },
    {
      id: 9,
      logo: py,
      name: "Python",
    },
    {
      id: 10,
      logo: spring,
      name: "Spring Boot",
    },
  ];
  return (
   <>
   <Element name="experiance">
     <div className="w-full px-4 md:px-20 my-16 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <span className="font-semibold">
          Skills and technologies I have learned and worked with.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 rounded-full">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="border rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >
              <img src={logo} alt={name} className="w-20 h-20 object-contain" />

              <h2 className="text-lg font-semibold mt-4">{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr />
   </Element>
   </>
  );
};

export default Experiance;
