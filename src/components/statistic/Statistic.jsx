import { Illustration } from "@components/index";
import styles from "./statistic.module.css";

export function Statistic() {
  return (
    <div className={styles.content}>
      <Illustration className={styles.pic} picName="notebook" />
      <span className={styles.desc}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и&nbsp;самочувствие.</span>
    </div>
  );
}
