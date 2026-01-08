import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/variant";

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
]


// Animation Variants
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
}

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">

        {/* Main Heading */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="faq" center />
          <h2 className="h2 mb-3 capitalize">Frequently asked questions</h2>
          <p className="mb-11 max-w-[480px] mx-auto">Donec consectetur suscipit nunc quis ultrices. Quisque suscipit diam non est imperdiet, et fringilla sapien condimentum.</p>
        </div>

        {/* FAQ Items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return <li key={index}>
              <FaqItem
                title={item.title} description={item.description}/>
            </li>
          })}
        </ul>

      </div>
    </section>
  )
}

export default Faq