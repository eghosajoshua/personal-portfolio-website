import { ImPhoneHangUp } from "react-icons/im";
import { FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

const ProfileDetails = () => {
  return (
    <section className="bg-white p-5 dark:bg-slate-900 flex m-5 md:mx-0 justify-center items-center flex-col gap-3 shadow-xl rounded-3xl relative mt-[140px] md:mt-[100px] md:h-fit">
      <div className="w-[200px] h-[200px] absolute rounded-3xl overflow-hidden -top-[100px] shadow-xl ">
        <img src="/images/portrait.jpeg" alt="" />
      </div>
      <p className="font-bold text-xl dark:text-white  mt-[110px]">
        Ehimwinriabe Eghosa
      </p>
      <p className="bg-slate-100 p-2 px-4 font-semibold rounded-lg text-md dark:bg-slate-800 dark:text-slate-50">
        Fullstack Developer
      </p>
      {/* social links */}
      <div className="my-4 flex gap-3">
        <a
          href="https://api.whatsapp.com/send?phone=2347058332578"
          target="_blank"
          className="bg-slate-100 dark:bg-slate-800  p-3 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-green-600 group"
        >
          <FaWhatsapp
            className="group-hover:text-white text-green-600"
            size={24}
          />
        </a>
        <a
          href="https://x.com/EghosaJosh1"
          target="_blank"
          className="bg-slate-100 dark:bg-slate-800 p-3 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black group"
        >
          <FaXTwitter
            className="group-hover:text-white dark:text-white"
            size={16}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eghosa-joshua-5ba61b2a5/"
          target="_blank"
          className="bg-slate-100 dark:bg-slate-800 p-3 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-800 group"
        >
          <FaLinkedinIn
            className="group-hover:text-white text-blue-700"
            size={18}
          />
        </a>

        <a
          href="https://www.youtube.com/@EghosaJoshua"
          target="_blank"
          className="bg-slate-100  dark:bg-slate-800  p-3 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-500 group"
        >
          <FaYoutube
            className="group-hover:text-white text-red-500"
            size={24}
          />
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=61554968871115"
          target="_blank"
          className="bg-slate-100  dark:bg-slate-800  p-3 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-500 group"
        >
          <TfiFacebook
            className="group-hover:text-white text-blue-500"
            size={24}
          />
        </a>
      </div>
      {/* contact details */}
      <div className="bg-slate-100 p-5 dark:bg-slate-800  rounded-lg w-full">
        <ContactDetails
          href="tel:+2347058332578"
          title="Phone"
          value="+2347058332578"
        >
          <ImPhoneHangUp size={24} className="text-blue-500 " />
        </ContactDetails>
        <hr />
        <ContactDetails
          title="Email"
          value="eghosajosh@gmail.com"
          href="mailto:eghosajosh@gmail.com"
        >
          <HiOutlineMail size={24} className="text-green-600 " />
        </ContactDetails>
        <hr />
        <ContactDetails title="Address" value="Lagos, Nigeria">
          <FaLocationDot size={24} className="text-orange-600 " />
        </ContactDetails>
      </div>
      {/* download cv */}
      <a
        href="/CV.pdf"
        download="eghosaCV.pdf"
        className="mt-4 items-center justify-center flex gap-2 rounded-lg p-2 px-4 bg-blue-500 hover:bg-transparent hover:text-blue-500 group ring-1 cursor-pointer"
      >
        <FaDownload
          className="group-hover:text-blue-500 text-white"
          size={18}
        />
        <p className="text-white font-bold group-hover:text-blue-500 text-md">
          Download CV
        </p>
      </a>
    </section>
  );
};

const ContactDetails = ({
  title,
  value,
  children,
  href,
}: {
  title: string;
  value: string;
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className="flex w-[100%] gap-3 my-4 dark:hover:bg-slate-800 hover:bg-white rounded-lg p-2  overflow-hidden"
    >
      <div className="bg-white dark:bg-slate-900  flex flex-shrink-0 justify-center items-center p-2 rounded-lg w-12 h-12">
        {children}
      </div>
      <div className="w-full">
        <p className="text-sm text-slate-600 dark:text-slate-300">{title}</p>
        <p className="font-semibold dark:text-white text-slate-900 text-md break-words w-full overflow-hidden ">
          {value}
        </p>
      </div>
    </a>
  );
};
export default ProfileDetails;
