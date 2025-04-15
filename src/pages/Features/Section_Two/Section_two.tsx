import RightLeft from "../slider/RightLeft";

export function Section_two() {
  return (
    <>
      <RightLeft
        background="bg-blue-600 bg-[url('/public/assets/Features_img/section2Bg.png')]"
        img="/public/assets/Features_img/Vaccine Tracker.png"
        style2="bg-white"
        alt="vaccine tracker"
        style="text-white"
        button="bg-white *:text-blue-600"
        heading="Never miss a vaccination appointment again"
        article="Get timely notifications for upcoming vaccinations. Monitor your child's vaccination progress from birth to 5 years."
      />
    </>
  );
}
