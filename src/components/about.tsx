import { BsGridFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-900 p-5 flex md:m-0 m-5 justify-center items-center flex-col gap-3 shadow-xl rounded-3xl relative"
    >
      <h2 className="font-bold dark:text-white text-2xl  border-b-4 borde-blue-400 w-full">
        About
      </h2>
      <p className="dark:text-slate-200 leading-7">
        I am a software developer from Nigeria who specializes in creating
        websites and mobile apps. With over 6 years of programming experience
        and a background in mathematics, I prioritize quality and user-friendly
        design in my projects. Additionally, I have a strong ability to craft
        visually appealing interfaces.
      </p>
      <h2 className="font-semibold text-xl mt-6 w-full dark:text-white">
        What I do
      </h2>
      {/* jobs */}
      <div className="flex w-full flex-col gap-3">
        <Skills
          title="Ui/Ux Design"
          body="Crafting intuitive and engaging digital experiences."
        >
          <BsGridFill className="text-blue-500" size={30} />
        </Skills>
        <Skills
          title="Web Devepment"
          body="Building functional and responsive websites."
        >
          <FaCode className="text-green-500" size={33} />
        </Skills>
        <Skills
          title="App Development"
          body="Developing sleek and efficient mobile applications."
        >
          <IoIosPhonePortrait className="text-orange-500" size={35} />
        </Skills>
      </div>
    </section>
  );
};

const Skills = ({
  children: icon,
  title,
  body,
}: {
  children: React.ReactElement;
  title: string;
  body: string;
}) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 w-full  flex gap-4 py-6 p-4 rounded-lg">
      {icon}
      <div>
        <h3 className="font-semibold text-xl dark:text-slate-100">{title}</h3>
        <p className="dark:text-slate-200">{body}</p>
      </div>
    </div>
  );
};
export default About;
