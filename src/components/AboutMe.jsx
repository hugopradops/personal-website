import styles from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <div>
        <p className={styles.name}>
              Hi there My name is <strong>Hugo Prado</strong> 
        </p>
        <p className={styles.info}>
            I am a Second Year Computer Science Student at the <strong>University of Guelph</strong>.
        </p>
    </div>
  );
}
