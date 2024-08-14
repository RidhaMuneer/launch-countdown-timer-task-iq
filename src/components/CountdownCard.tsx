// styles
import styles from "@/app/page.module.css";

// types
import { CountdownCardProps } from "@/types/countdown";

// react
import React from "react";

/**
 * CountdownCard component that displays a single unit of time (days, hours, minutes, or seconds).
 * 
 * @component
 * 
 * @param {CountdownCardProps} props - The props for the component.
 * @param {number} props.time - The numeric value of the time unit (e.g., 5 days).
 * @param {string} props.title - The title of the time unit (e.g., "DAYS").
 * 
 * @example
 * ```jsx
 * import CountdownCard from '@/components/CountdownCard';
 * 
 * function Example() {
 *   return <CountdownCard time={5} title="DAYS" />;
 * }
 * 
 * export default Example;
 * ```
 */

const CountdownCard: React.FC<CountdownCardProps> = ({ time, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.flip_card}>
        <div className={styles.top}/>
        <div className={styles.time}>{time}</div>
        <div className={styles.bottom}/>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default CountdownCard;
