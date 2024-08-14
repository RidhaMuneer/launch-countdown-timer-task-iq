import Image from "next/image";
import { footerIconLinks } from "@/data/icons";
import styles from "@/app/page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {footerIconLinks.map((icon, index) => (
        <Image
          key={index}
          src={icon}
          alt={icon}
          width={30}
          height={30}
          className={styles.icon}
        />
      ))}
    </footer>
  );
};

export default Footer;
