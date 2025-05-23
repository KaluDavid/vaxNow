function Map() {
  return (
    <div className="flex items-center size-screen justify-center w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244299034!2d7.367465227828729!3d9.024416368066099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1747457674642!5m2!1sen!2sng"
        width="100%"
        height="100%"
        className="border-0 rounded-r-[24px] size-screen h-screen w-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
