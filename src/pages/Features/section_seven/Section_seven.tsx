import LeftRight from "../slider/LeftRight";

export function Section_seven() {
  return (
    <>
      <span className="*:py-[50px] *:pb-[13rem]">
        <LeftRight
          background="bg-blue-600 bg-[url('/assets/Features_img/hospitalVirus.png')]"
          button="*:text-blue-600 bg-white"
          style="text-white"
          heading="Seamlessly share your health records with healthcare providers"
          article="Share your health data with participating hospitals. Ensure accurate and up-to-date medical information."
          img="/assets/Features_img/Find Hospital.png"
          alt="vaxnow hospitals"
          style2="bg-white"
        />
      </span>
    </>
  );
}
