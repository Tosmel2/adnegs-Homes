import React, { useState} from 'react';
import { FaBars } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);


  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 50) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };

  return (
    <>
    {/* // <div className={`relative ${isSticky ? 'sticky top-0 left-0 right-0' : ''}`}> */}
      <FaBars className="text-3xl cursor-pointer absolute top-4 right-3 text-white" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white px-3 py-6 rounded-md shadow-md w-full">
           <ul>
            <li className="mb-3 text-xl"><a href="/">Home</a></li>
            <li className="mb-3 text-xl"><a href="/">LandLord</a></li>
            <li className="mb-3 text-xl"><a href="/">Tenants</a></li>
            <li className="mb-3 text-xl"><a href="/">Contact Us</a></li>
          </ul>
        </div>
      )}
    {/* </div> */}
    </>
  );
};

export default HamburgerMenu;
