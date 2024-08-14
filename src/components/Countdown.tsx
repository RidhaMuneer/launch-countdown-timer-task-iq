'use client'

// react
import { useState, useEffect } from 'react';

// styles
import styles from '@/app/page.module.css';

// compoennts
import CountdownCard from '@/components/CountdownCard';

// utils
import getCountdown from '@/utils/getCountdown';

/**
 * Countdown component that displays the remaining time in days, hours, minutes, and seconds.
 * 
 * This component calculates the remaining time to a target date (14 days from the current date)
 * and updates the countdown every second.
 * 
 * @component
 * 
 * @example
 * ```jsx
 * import Countdown from '@/components/Countdown';
 * 
 * function App() {
 *   return <Countdown />;
 * }
 * 
 * export default App;
 * ```
 */

const Countdown = () => {
  const [countdown, setCountdown] = useState(() => getCountdown(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)));
  
  useEffect(() => {
    const targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

    const intervalId = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={styles.countdown}>
      <CountdownCard 
        time={countdown.days} 
        title="DAYS" 
      />
      <CountdownCard 
        time={countdown.hours}
        title="HOURS"
      />
      <CountdownCard 
        time={countdown.minutes} 
        title="MINUTES"
      />
      <CountdownCard 
        time={countdown.seconds} 
        title="SECONDS"
      />
    </div>
  );
};

export default Countdown;
