import React from "react";

function Map() {
  return (
    <div className="flex items-center  justify-center md:size-[100vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070397.038813506!2d3.374935002651658!3d9.006743054106995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1743695204030!5m2!1sen!2sng"
        width="100%"
        height="100%"
        className="border-0 min-md:rounded-r-[24px] max-min-md:rounded-b-[24px] "
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
