import Image from "next/image"
import Pretitle from "../Pretitle"
import Button from "./Button"

const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">


          {/* About Text */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              {/* Pretitle (About)  */}
              <Pretitle text="about us" />
              <h2 className="h2 mb-6 capitalize">
                Maecenas urus sit amet nibh sit amet
              </h2>
              <p className="mb-11">
                Ut id justo leo. Duis semper risus et lacus tempus aliquam sed quis sapien. 
                Nullam fermentum viverra orci, nec vestibulum quam rhoncus ac. 
                Praesent maximus, nisl posuere dictum pretium, turpis nisi egestas dolor.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="CEO Signature"
                />
              </div>
              <p>Company CEO</p>

              {/* Action Button */}
              <Button text="Contact Us" />
            </div>
          </div>

          {/* About Image */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              <Image
                src={"/assets/img/about/about.jpg"}
                height={444}
                width={493}
                alt=""
                className="object cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About