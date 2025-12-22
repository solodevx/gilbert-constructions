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
    path: "https://web.facebook.com/",
  },
  {
    icon: <RiTwitterXFill />,
    path: "https://x.com/",
  },
  {
    icon: <RiTiktokFill />,
    path: "https://www.tiktok.com/",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/",
  },
  {
    icon: <RiWhatsappFill />,
    path: "https://web.whatsapp.com/",
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
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
