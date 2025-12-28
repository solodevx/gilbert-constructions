import Image from "next/image";
import Pretitle from "../Pretitle";
import Button from "./Button";

const About = () => {
  return (
    // Semantic section for the About area
    // `id="about"` allows scroll navigation to this section
    <section id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        
        {/* Main layout wrapper
            - Column on mobile
            - Row on large screens */}
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">

          {/* ================= Left side: Text content ================= */}
          <div className="flex-1">
            {/* Restricts text width for better readability */}
            <div className="max-w-[540px]">

              {/* Section pretitle */}
              <Pretitle text="about us" />

              {/* Main heading */}
              <h2 className="h2 mb-6 capitalize">
                Maecenas urus sit amet nibh sit amet
              </h2>

              {/* Description paragraph */}
              <p className="mb-11">
                Ut id justo leo. Duis semper risus et lacus tempus aliquam sed quis sapien.
                Nullam fermentum viverra orci, nec vestibulum quam rhoncus ac.
                Praesent maximus, nisl posuere dictum pretium, turpis nisi egestas dolor.
              </p>

              {/* Signature block */}
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="CEO Signature"
                />
                <p>Company CEO</p>
              </div>

              {/* Call-to-action button */}
              <Button text="Contact Us" />
            </div>
          </div>

          {/* ================= Right side: Image ================= */}
          <div className="flex-1 xl:flex xl:justify-center">
            {/* Image wrapper for positioning decorative elements */}
            <div className="xl:w-[444px] xl:h-[493px] relative">

              {/* Decorative background box (desktop only) */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>

              {/* Main About image */}
              <Image
                src="/assets/img/about/img.jpg"
                height={444}
                width={493}
                alt="Support image for the about section"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
