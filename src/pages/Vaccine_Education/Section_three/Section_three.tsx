import { Cards } from "./Cards";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import WordAnime from "../../../utils/motions/WordAnime";
import { parentStagger } from "../../../utils/motions/motionVariants";

export function Section_three() {
  const scaleIn = useRevealOnScroll();
  const parent = parentStagger();
  return (
    <>
      <motion.div
        {...scaleIn}
        className="flex flex-col mb-[100px] py-20 bg-blue-50 bg-[url('/assets/Vaccine_education/ArticlesBG.svg')] items-center bg-cover justify-between w-full  text-blue-800 gap-[60px] text-center overflow-x-hidden"
      >
        <WordAnime text="Read up our latest articles" />
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="grid xl:grid-cols-3 px-[20px] lg:grid-cols-2 gap-10 "
        >
          <Cards
            img="/assets/Vaccine_education/img1.png"
            heading="Importance of childhood immunization"
          >
            Vaccines have eliminated smallpox and have nearly eliminated other
            infections, such as polio, that were once common causes of chronic
            health issues or death in children.
            <br />
            <br />
            However, vaccine-preventable diseases still exist, and without
            proper immunization, they can resurface and spread quickly.
            Childhood immunization helps protect not only your child but also
            the community by preventing outbreaks. It strengthens the immune
            system, reducing the risk of severe illness, hospitalization, or
            long-term complications from diseases like measles, whooping cough,
            and hepatitis B.
            <br />
            <br />
            By following the recommended immunization schedule, parents can
            ensure their children receive timely protection, setting the
            foundation for a healthier life.
          </Cards>
          <Cards
            img="/assets/Vaccine_education/img2.png"
            heading="Vaccine safety and myths"
          >
            Vaccine-preventable diseases may be less common in your country, but
            they can quickly spread and infect vulnerable people, especially in
            this age of easy travel.
            <br />
            <br />
            Despite their proven effectiveness, vaccines are often surrounded by
            misinformation. Some common myths include the belief that vaccines
            cause autism (a claim debunked by extensive scientific research) or
            that natural infection is better than immunization. The truth is,
            vaccines undergo rigorous testing for safety and efficacy before
            approval, and they continue to be monitored for any side effects.
            <br />
            <br />
            Understanding the science behind vaccines and relying on credible
            medical sources can help dispel fears and encourage more people to
            get vaccinated, ultimately strengtheninghealth.
          </Cards>
          <Cards
            img="/assets/Vaccine_education/img3.png"
            heading="Vaccine preventable diseases"
          >
            Infections caused by these diseases can result in hospitalizations
            and can sometimes be fatal. The best protection against
            Vaccine-Preventable Diseases (VPDs) is vaccination.
            <br />
            <br />
            Diseases like diphtheria, tetanus, influenza, and rubella have
            historically caused devastating outbreaks, but thanks to vaccines,
            their occurrence has significantly declined. However, lapses in
            immunization coverage can lead to re-emergence, as seen in some
            measles and polio outbreaks in certain regions.
            <br />
            <br />
            Vaccines work by stimulating the body’s immune response, preparing
            it to fight infections before they take hold. Ensuring high
            immunization rates helps maintain herd immunity, protecting those
            who cannot receive vaccines, such as infants and individuals with
            weakened immune systems.
          </Cards>
          <Cards
            img="/assets/Vaccine_education/img4.png"
            heading="Healthy lifestyle tips for families"
          >
            Vaccines have eliminated smallpox and have nearly eliminated other
            infections, such as polio, that were once common causes of chronic
            health issues or death in children.
            <br />
            <br />
            In addition to immunization, a healthy lifestyle plays a crucial
            role in preventing illnesses and maintaining overall well-being.
            Families can adopt simple habits such as eating a balanced diet rich
            in vitamins and minerals, engaging in regular physical activity,
            ensuring proper sleep, and practicing good hygiene.
            <br />
            <br />
            Routine health checkups, mental well-being, and staying up to date
            on vaccinations all contribute to a healthier household. By making
            informed choices, families can build stronger immune systems and
            reduce the risk of preventable diseases.
          </Cards>
          <Cards
            img="/assets/Vaccine_education/img5.png"
            heading="Nutrition and child development"
          >
            Vaccine-preventable diseases may be less common in your country, but
            they can quickly spread and infect vulnerable people, especially in
            this age of easy travel.
            <br />
            <br />
            Proper nutrition is essential for a child’s physical and cognitive
            development. Nutrients such as iron, protein, vitamins A and D, and
            omega-3 fatty acids play a crucial role in brain function, bone
            growth, and immune system support. When combined with timely
            vaccinations, a well-balanced diet ensures children develop strong
            defenses against infections.
            <br />
            <br />
            Parents should aim to provide a variety of nutrient-dense foods,
            encourage hydration, and limit processed foods that offer little
            nutritional value. Educating families on the importance of diet and
            immunization helps foster healthier future generations.
          </Cards>
          <Cards
            img="/assets/Vaccine_education/img6.png"
            heading="First aid essentials for parents"
          >
            Infections caused by these diseases can result in hospitalizations
            and can sometimes be fatal. The best protection against VPDs is
            vaccines. Vaccines help reduce the incidence of VPDs and, in some
            cases, prevent outbreaks altogether. However, beyond immunization,
            parents should be prepared for minor injuries and emergencies that
            may occur at home. A well-stocked first aid kit should include
            antiseptics, bandages, pain relievers, and emergency contact
            numbers. Knowing how to handle burns, allergic reactions, cuts, and
            choking incidents can make a critical difference before professional
            medical help is available. Staying informed about basic first aid
            procedures ensures parents can act quickly and confidently in
            emergency situations, safeguarding their children’s health at all
            times.
          </Cards>
        </motion.div>
      </motion.div>
    </>
  );
}
