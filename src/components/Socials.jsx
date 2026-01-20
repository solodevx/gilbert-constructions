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
    path: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwa.me%2Fmessage%2FPFIIZ55K7WV3D1%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExWDh6bUhoRVFHTzQ3cFRiRnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4J8gpnGF96yEgbDQUv4WYviv2prZnVkOmdy5YBrR2Y6Yd86w8xh1IGYKpk0Q_aem_uz2O3HlWyhBct5WkGdPDJA&h=AT0DO32Q8cbP_OrpVYA-zgdSP3vc1_gFx_HQeaFdHqhjH80nS34v1v7PrhQQ1X8yRhFcJYRr_4YxpSX78QzGz68Ro7tyODw6S2va_G2zJ0UwDJQyOmJl9Yc8PupYDkjQQaOKVQ"
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