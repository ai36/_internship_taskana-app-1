import { Icon } from "@components";
import styles from "./input.module.css";

export function Input({ value, onChange, inputRef, onKeyDown,  }) {
    const handleReset = (e) => {
        e.preventDefault();
        onChange("");
    };

    return (
        <div className={styles.form}>
            <label className={styles.label}>
                <span className={styles.text}>Название</span>
                <input
                    ref={inputRef}
                    className={styles.input}
                    id="createTaskInput"
                    type="text"
                    placeholder="Название задачи"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={onKeyDown}
                />
                <button className={styles.close} type="reset" onClick={handleReset} aria-label="Очистить поле ввода">
                    <Icon iconName="xmark" fill="currentColor" />
                </button>
            </label>
        </div>
    );
}
