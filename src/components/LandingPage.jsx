import { motion } from "framer-motion";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import BGImg from "../assets/bg8.jpg";
import HeaderImage from "../assets/headerImg5.jpg";
import { landingFooterLinks, landingHeaderLinks } from "../helper/data";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* encapsulates all */}
      <div
        className="h-screen w-full flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)),url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* header */}
        <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
          <RxHamburgerMenu
            size={25}
            color="white"
            className="cursor-pointer sm:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <a href="/Signin">
          <h1
            className="font-bold text-yellow-600 text-3xl hidden md:flex lg:flex"
            >Explore.</h1>
          </a>
          
            {/*navigation bar items*/}
            <div className="ml-auto">
              <div className=" items-center hidden md:flex gap-24">
            {landingHeaderLinks.slice(0,4).map((item)=>(
              <>
              <li className="list-none text-white text-2xl hover:border-b-4 border-yellow-400 duration-200 cursor-pointer">{item.title}</li>
              </>
            ))}
            </div> </div>
            
            
          <img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            className="h-52 w-40 object-cover ml-auto"
            src={HeaderImage}
            alt="image"
          />
        </div>

        {/* side menu */}
        <motion.div
          initial={{ x: open ? 600 : 0 }}
          animate={{ x: open ? 0 : 600 }}
          transition={{ duration: 0.4 }}
          className={`
            h-screen w-[80%] sm:hidden fixed top-0 right-0 bg-white z-50 rounded-lg`}
        >
          {landingHeaderLinks.map((item) => (
            <>
              <Link
                className="flex font-bold text-black-500 text-lg pl-4 py-1 
                cursor-pointer hover:bg-gray-400 hover:rounded-lg"
                key={item.id}
                to={item.link}
              >
                {item.title}
              </Link>
            </>
          ))}
        </motion.div>

        {/* hero */}
        <div className="w-full text-center text-white">
          <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">
            The Country of Himalayas
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-yellow-600">NEP</span>AL
          </h1>
        </div>
        {/* footer */}
        <div className="w-full grid grid-cols-2">
          {/* first side */}
          <div className="h-full w-full">
            <p className="leading-6 pl-6 md:pl-12 pb-6 md:pb-12 text-white">
              Visit Nepal, You will never regret it. <br /> This is something
              incredible, fantastic, <br /> mesmerizing and lifetime experience.{" "}
            </p>
          </div>
          {/* second side */}
          <div className="h-full w-full flex items-end justify-end">
            <div className="h-20 w-full items-center flex gap-4 flex-wrap pl-2 backdrop-blur-sm ">
              {landingFooterLinks.map((link) => (
                <>
                  <li
                    key={link.id}
                    className="text-white list-none hover:border-b-4 border-yellow-400 md:ml-14"
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                </>
              ))}
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default LandingPage;