import { contactList } from "../constants";
import Reveal from "../components/Reveal";
const Footer = () => {
  return (
    <div
      className="max-container bg-footer max-sm:bg-footer_mobile bg-cover bg-center bg-no-repeat w-full h-[300px]   relative"
      id="contact"
    >
      <div className="w-full pt-[70px] max-sm:pt-[10px] flex flex-1 flex-row max-sm:flex-col">
        <Reveal>
          <div className="w-[30%] max-sm:w-full">
            <h3
              className="font-monserrat text-3xl font-extrabold text-black-gray px-10
             max-sm:px-2 pt-1 max-sm:pt-10 max-sm:text-xl max-sm:pb-2"
            >
              LET'S CONNECT
            </h3>
          </div>
        </Reveal>
        <div
          className="bg-white  pt-1 w-[70%] max-sm:w-full flex flex-col flex-1 gap-10  
        max-sm:gap-4 max-sm:pt-10 max-sm:pb-[40px] max-sm:pl-5"
        >
          <Reveal>
            <div>
              <h4 className="font-montserrat font-extrabold text-sm text-black-gray">
                CONTACT
              </h4>
              {contactList.length > 0 && ( // Check if contactList is not empty
                <a href={contactList[0]?.href} target="_blank">
                  <p className="font-montserrat text-sm py-1">
                    {contactList[0]?.title}
                  </p>
                </a>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h4 className="font-montserrat font-extrabold text-sm text-black-gray">
                ON THE WEB
              </h4>
              {contactList.slice(1, 3).map(
                (
                  contact,
                  index // Display elements 1 and 2
                ) => (
                  <a href={contact.href} target="_blank" key={index}>
                    <p className="font-montserrat text-sm py-1">
                      {contact.title}
                    </p>
                  </a>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Footer;
