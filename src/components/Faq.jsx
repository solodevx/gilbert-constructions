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
    description: "Timeline vary based on project size, complexity and scope."
  },
  {
    title: "Do I need a permit for a construction project?",
    description: "Answer 2"
  },
  {
    title: "What materials do you use for construction projects?",
    description: "Answer 3"
  },
  {
    title: "Can I make changes after a project has started?",
    description: "Answer 4"
  },
  {
    title: "How do you handle safety during construction projects?",
    description: "Answer 5"
  },
  {
    title: "What is the typical cost of a project?",
    description: "Answer 6"
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
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="faq" center />
          <h2 className="h2 mb-3 capitalize">Frequently asked questions</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Donec consectetur suscipit nunc quis ultrices.
            Quisque suscipit diam non est imperdiet.
          </p>
        </div>

        {/* FAQ list */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => (
            <li key={index}>
              {/* Individual FAQ item */}
              <FaqItem
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Faq;