import { FaEye, FaGithub, FaXmark } from "react-icons/fa6";
import { data } from "../utils/data";
import { useState } from "react";

interface ModalDetailsType {
  id: number;
  title: string;
  description: string;
  img: string;
  github: string;
  type: string;
  live: string;
  technologies: string[];
}
const Portfolio = () => {
  const [modalDetails, setModalDetails] = useState<ModalDetailsType>(data[0]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="portfolio"
      className="bg-white dark:bg-slate-900 p-5 flex m-5 justify-center items-center flex-col gap-3 shadow-xl rounded-3xl relative md:m-0 md:my-4"
    >
      <h2 className="font-bold mb-3 dark:text-white text-2xl  border-b-4 borde-blue-400 w-full">
        Portfolio
        <span className="text-sm text-slate-400"> (some of my works)</span>
      </h2>
      {/* works */}
      <div className="flex gap-4 flex-wrap w-full">
        {data.map((work, index) => (
          <Works
            setModalDetails={setModalDetails}
            setOpenModal={setOpenModal}
            index={index}
            title={work.title}
            image={work.img}
            type={work.type}
          />
        ))}
      </div>
      {/* modal */}
      {openModal && (
        <Modal setOpenModal={setOpenModal} modalDetails={modalDetails} />
      )}
    </section>
  );
};
/**
 * Renders a single work item in the portfolio section.
 * The work item displays an image, a label, and the title of the project.
 * The work item is wrapped in a clickable container with a rounded border and a slate-100/slate-800 background color.
 */
const Works = ({
  index,
  setModalDetails,
  setOpenModal,
  title,
  image,
  type,
}: {
  index: number;
  setModalDetails: Function;
  setOpenModal: Function;
  title: string;
  image: string;
  type: string;
}) => (
  <div
    onClick={() => {
      setModalDetails(data[index]);
      setOpenModal(true);
    }}
    className="bg-slate-100 dark:bg-slate-800 w-[200px] p-4 rounded-lg cursor-pointer  flex-grow"
  >
    <img className="rounded-lg" src={image} alt="" />
    <p className="mt-4 text-slate-700 dark:text-slate-400">{type}</p>
    <p className="font-bold text-lg dark:text-white">{title}</p>
  </div>
);
const Modal = ({
  modalDetails,
  setOpenModal,
}: {
  modalDetails: ModalDetailsType;
  setOpenModal: Function;
}) => (
  <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center  z-10 ">
    {/* overlay */}
    <div
      onClick={() => setOpenModal(false)}
      className="bg-black bg-opacity-80 w-full h-full"
    ></div>
    {/* content */}
    <div className="bg-white dark:bg-slate-900  w-[80vw] absolute h-[80vh] rounded-3xl flex flex-col left-[50vw] top-[50vh] translate-x-[-50%] translate-y-[-50%] max-w-[500px] max-h-[700px]">
      <div className="overflow-y-scroll  p-4 my-2">
        <h3 className="text-center mt-4 text-lg dark:text-white font-bold">
          {modalDetails.title}
        </h3>
        <p className="w-full text-center mb-5 text-slate-600 text-sm dark:text-slate-400">
          {modalDetails.type}
        </p>
        <img className="rounded-lg mb-3" src={modalDetails.img} alt="" />
        {/* tech used */}
        <div className="flex gap-3 items-center justify-center mb-3 w-full flex-wrap">
          {modalDetails.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-400 dark:bg-slate-950 px-3 p-1 text-white rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* view and github links */}
        <div className="flex gap-3 items-center justify-center">
          {modalDetails.live != "" && (
            <a
              target="_blank"
              href={modalDetails.live}
              className="flex items-center justify-center bg-blue-400 dark:bg-blue-600 p-1  h-10 w-10 rounded-full text-white"
            >
              <FaEye size={24} />
            </a>
          )}
          <a
            target="_blank"
            href={modalDetails.github}
            className="flex items-center justify-center bg-blue-400 dark:bg-blue-600 p-1  h-10 w-10 rounded-full text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
        {/* project description */}
        <p className="mt-6 dark:text-slate-200"> {modalDetails.description}</p>
      </div>
      {/* close btn */}
      <button
        onClick={() => setOpenModal(false)}
        className="dark:bg-red-500 bg-red-400 absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center"
      >
        <FaXmark color="white" />
      </button>
    </div>
  </div>
);

export default Portfolio;
