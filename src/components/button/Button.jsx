import { Icon } from "@components/index";
import styles from "./button.module.css";

export function Button({
  className = "",
  arrow = false,
  disabled = false,
  loading,
  iconName,
  fill = "currentColor",
  customize = "primary",
  children,
  onButtonClick,
  ref,
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      loading={loading}
      customize={customize}
      onClick={onButtonClick}
      ref={ref}
      type="button"
      {...props}
    >
      <div className={styles.label}>
        {loading ? (
          <Icon className={styles.icon} iconName="loading" fill="currentColor" />
        ) : (
          <>
            <Icon className={styles.icon} iconName={iconName} fill={fill} />
            {!loading && children ? <span className={styles.text}>{children}</span> : null}
            {arrow && <Icon className={styles.arrow} iconName="arrowbottom" fill={fill} />}
          </>
        )}
      </div>
    </button>
  );
}
