import { Icon } from "@components";
import styles from "./button.module.css";

export function Button({ disabled = false, loading, iconName, fill = "currentColor", customize = "primary", children, onButtonClick, ref}) {
    return (
        <button className={styles.button} disabled={disabled} loading={loading} customize={customize} onClick={onButtonClick} ref={ref}>
            <div className={styles.label}>
                <Icon className={styles.icon} iconName={iconName} fill={fill} />
                {(!loading && children) ? <span className={styles.text}>{children}</span> : null}
            </div>
        </button>
    );
}
