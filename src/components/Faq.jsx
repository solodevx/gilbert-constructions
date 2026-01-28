// Import reusable UI components
import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";

// Framer Motion for animations
import { motion } from "framer-motion";
// Shared animation variants
import { fadeIn } from "@/animations/variant";

// Static FAQ content data
// Each object represents one FAQ item
const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timeline vary based on project size, complexity and scope. The duration depends on the type and scale of your project. It may take several months or more, depending on various factors, but we always aim to keep things on track."
  },
  {
    title: "Do I need a permit for a construction project?",
    description: "Yes, any significant construction or renovation requires proper permits from local authorities. Don’t worry—we help guide you through the process to ensure everything is legal and stress-free."
  },
  {
    title: "What materials do you use for construction projects?",
    description: "We use standardised modern tools, equipment, and materials, chosen to deliver quality and durability for every project. We make sure to use eco-friendly and safe materials whenever possible, ensuring a greener and healthier environment."
  },
  {
    title: "Can I make changes after a project has started?",
    description: "Minor adjustments are possible, but major changes may affect timelines and costs. We’ll discuss everything with you so you can make informed decisions without disrupting the project flow."
  },
  {
    title: "How do you handle safety during construction projects?",
    description: "Safety is our top priority. All our sites follow strict safety protocols, including proper scaffolding, protective gear for workers, and secure handling of equipment. We make sure everyone stays safe while delivering quality work."
  },
  {
    title: "What is the typical cost of a project?",
    description: "We handle a variety of projects, including residential, renovation, restoration, and consulting, adapting our approach to suit each client’s needs. We provide clear pricing and estimates to help you make informed decisions."
  },
  {
    title: "Do you communicate during the course of a project?",
    description: "Clients are kept informed through regular updates at key stages of the work. Communication methods and frequency are agreed based on what works best for the project. As well as this, we provide regular updates on the progress of the project."
  }
];

// Animation variants for staggered FAQ appearance
// `index` is used to delay each item slightly
const faqItemsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3
    },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">

        {/* Section heading */}
        <motion.div
          className="text-center max-w-[540px] mx-auto xl:mb-20"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Pretitle text="faq" center />
          <h2 className="h2 mb-3 capitalize">
            Ready to Start Your Project?
          </h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Whether you’re planning a new build, renovation, or consultation, 
            our team is ready to help bring your vision to life. 
            Here are some of the most frequently asked questions.
          </p>
        </motion.div>

        {/* FAQ list */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => (
            <motion.li
              key={index}
              variants={faqItemsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.8 }}
              custom={index}
            >
              {/* Individual FAQ item */}
              <FaqItem
                title={item.title}
                description={item.description}
              />
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Faq;