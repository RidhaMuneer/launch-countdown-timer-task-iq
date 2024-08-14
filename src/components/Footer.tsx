// nextjs
import Image from "next/image";

// data
import { footerIconLinks } from "@/data/icons";

// styles
import styles from "@/app/page.module.css";

/**
 * Footer component that displays a row of social media icons.
 * 
 * This component maps over an array of icon paths and renders each icon using the `Image` component from Next.js.
 * 
 * @component
 * 
 * @example
 * ```jsx
 * import Footer from '@/components/Footer';
 * 
 * function App() {
 *   return <Footer />;
 * }
 * 
 * export default App;
 * ```
 */

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
