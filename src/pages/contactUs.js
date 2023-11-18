import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactComponent = () => {
  return (
    <div className="text-center relative">
      <div className="flex flex-col">
        <img src="./images/contactUs.webp" className="w-full blur-xs brightness-50" alt="Interface" />
        <div className="absolute inset-y-0 right-0 flex items-center text-white p-4">
          <div className="flex flex-col relative -left-40 top-40">
            <h2 className="text-center text-3xl font-serif mb-4">
              Dessert.Bar.Kitchen
              <br />
              +040 2355 7261
              <br />
              savory@qodeinteractive.com
              <br />
              Plot No.8-2, 293/82/A/161, Rd Number 13, Jubilee Hills, Hyderabad, Telangana 500033
            </h2>
            <div className="flex flex-row justify-center items-center">
              <div className="mx-4">
                <a href="https://youtube.com/@TechArion?si=q879ITWNXsC8Ixmp" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                  <br />
                </a>
              </div>

              <div className="mx-4">
                <a href="https://m.facebook.com/techarion" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <br />
                </a>
              </div>

              <div className="mx-4">
                <a href="https://instagram.com/techarion?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <br />
                </a>
              </div>
            </div>
            <hr className="border-white w-full mt-4" />
            <h3 className="text-lg font-bold text-white">TECHARION 2023</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
