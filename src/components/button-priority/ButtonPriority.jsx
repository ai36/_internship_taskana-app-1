import { Icon } from "@components";
import styles from "./buttonPriority.module.css";

export function ButtonPriority({ iconName, priority, currentPriority, onCurrentPriority }) {
    return (
        <label className={styles.button} data-priority={priority}>
            <input className={styles.radio} type="radio" name="priority" checked={priority === currentPriority} onChange={() => onCurrentPriority(priority)} />
            <Icon iconName={iconName} />
        </label>
    );
}
