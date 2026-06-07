import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <>
      <Element name="about">
        <div className="w-full px-4 md:px-20 my-16 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
          Hello I'm Tanmoy, a MERN Stack Developer passionate about building
          modern, responsive, and scalable web applications using MongoDB,
          Express.js, React.js, and Node.js.
        </p>
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Education & Training
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          Currently pursuing my Bachelor Of Computer Application(BCA) at
          Midnapore City College under Vidyasagar University. Along with my
          academic journey, I am dedicated to mastering Full Stack Web
          Development with the MERN Stack, building responsive and scalable web
          applications, and continuously improving my technical and
          problem-solving skills.
        </p>

        <br />
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Skill & Expertise
        </h1>
        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            MERN Stack Development (MongoDB, Express.js, React.js, Node.js)
          </li>
          <li>Frontend Development with React.js and Tailwind CSS</li>
          <li>REST API Development and Backend Integration</li>
          <li>Database Design and Management using MongoDB</li>
          <li>JavaScript (ES6+), Java, and Python</li>
          <li>Git, GitHub, and Version Control</li>
          <li>Responsive Web Design and UI/UX Fundamentals</li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Professional Experience
        </h1>

        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            Developed <b>LearnStack</b>, a full-stack educational platform using
            the MERN stack.
          </li>
          <li>
            Built a <b>Note Taking Application</b> with CRUD functionality and
            user-friendly UI.
          </li>
          <li>
            Implemented RESTful APIs, authentication, and database integration
            using MongoDB.
          </li>
          <li>
            Created responsive and modern user interfaces with React.js and
            Tailwind CSS.
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Achievements & Awards
        </h1>

        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Built and completed multiple MERN Stack projects.</li>
          <li>Developed LearnStack, a full-stack educational platform.</li>
          <li>Created a Note Taking Application with CRUD functionality.</li>
          <li>Maintained and showcased projects through GitHub.</li>
          <li>
            Continuously learning and applying modern web development
            technologies.
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-500 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          To leverage my MERN Stack development skills to build impactful,
          scalable, and user-centric web applications while continuously growing
          as a software developer and contributing to innovative technology
          solutions.
        </p>
        <br />
      </div>
      <hr />
      </Element>
    </>
  );
};

export default About;
