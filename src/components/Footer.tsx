// data
import { footerIconLinks } from "@/data/icons";

// styles
import styles from "@/app/page.module.css";

/**
 * Footer component that displays a row of social media icons.
 *
 * This component maps over an array of icon paths and renders each icon using a div.
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
        <div
          key={index}
          className={styles.icon}
          style={{ backgroundImage: `url(${icon})` }}
        />
      ))}
    </footer>
  );
};

export default Footer;
