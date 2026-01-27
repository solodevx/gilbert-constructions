// Next.js Link component for client-side navigation
import Link from "next/link";

// Social media icons from react-icons
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiTiktokFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

// Social links configuration
// Each object represents one social platform
const socials = [
  {
    icon: <RiFacebookFill />,
    path: "https://web.facebook.com/p/Gilbert-constructions-100063886006405/?_rdc=1&_rdr#",
  },
  {
    icon: <RiTwitterXFill />,
    path: "https://x.com/Gilbert54133369?s=20",
  },
  {
    icon: <RiTiktokFill />,
    path: "https://www.tiktok.com/@gilbertconstructions/",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/gilbert_constructions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    icon: <RiWhatsappFill />,
    path: "https://wa.me/2349097209796?text=Hello%20Gilbert%20Constructions,%20I%20would%20like%20to%20make%20an%20enquiry"
  },
];

// Socials component
// - containerStyles: Tailwind classes for the wrapper div
// - iconStyles: Tailwind classes applied to each icon/link
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        // Each social icon links to an external platform
        <Link
          href={item.path}
          key={index}
          className={iconStyles}
          target="_blank"//new tab opens
          rel="noopener noreferrer"//prevents security risks and hides referrer
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;