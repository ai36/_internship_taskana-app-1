import { Icon } from "@components/index";
import styles from "./buttonPriority.module.css";
import { forwardRef } from "react";

export const ButtonPriority = forwardRef(({ iconName, priority, currentPriority, onCurrentPriority, disabled}, ref) => {
  return (
    <label className={styles.button} data-priority={priority}>
      <input
        className={styles.radio}
        type="radio"
        name="priority"
        checked={priority === currentPriority}
        onChange={() => onCurrentPriority(priority)}
        disabled={disabled}
        ref={ref}
      />
      <Icon iconName={iconName} />
    </label>
  );
});
