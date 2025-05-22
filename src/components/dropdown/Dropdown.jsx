import { Button, Icon } from "@components/index";
import { useClickOutside, useTasks } from "@hooks/index";
import styles from "./dropdown.module.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { sortMethods } from "@constants/index";

export const Dropdown = ({ maxHeight = 200 }) => {
  const { tasks, setTasks } = useTasks();

  const [dropdownShow, setDropdownShow] = useState(false);
  const [currentSortMethod, setCurrentSortMethod] = useState(sortMethods[4]);

  const dropdownListRef = useRef(null);
  const handleClickOutside = useCallback(() => {
    setDropdownShow(false);
  }, []);
  useClickOutside(dropdownListRef, handleClickOutside, "data-ignore-dropdown-click-outside");

  const handleDropdownShow = () => {
    setDropdownShow(!dropdownShow);
  };

  const handleKeyboardSortMethodChoice = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCurrentSortMethodChoice(index);
    }
    if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
      e.preventDefault();
      const next = (index + 1) % sortMethods.length;
      focusInputByIndex(next);
    }
    if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
      e.preventDefault();
      const prev = (index - 1 + sortMethods.length) % sortMethods.length;
      focusInputByIndex(prev);
    }
  };

  const focusInputByIndex = (targetIndex) => {
    const inputs = dropdownListRef.current?.querySelectorAll("input[type=radio]");
    if (inputs && inputs[targetIndex]) {
      inputs[targetIndex].focus();
    }
  };
  
  const handleCurrentSortMethodChoice = (index) => {
    setCurrentSortMethod(sortMethods[index]);
    setTimeout(() => setDropdownShow(false), 400);
  };

  useEffect(() => {
    setTasks(prev => {
      const sortedTasks = currentSortMethod.sortFn(prev);
      const isEquiv = sortedTasks.every((item, index) => item === prev[index]);
      return isEquiv ? prev : sortedTasks;
    });
  }, [tasks, currentSortMethod]);

  return (
    <div className={styles.dropdownBox}>
      <div className={styles.dropdownTrigger} data-ignore-dropdown-click-outside="true">
        <Button className={`${styles.dropdownButton} ${dropdownShow ? styles.dropdownShow : ""}`} iconName={currentSortMethod.icon || "ascending"} onButtonClick={handleDropdownShow} arrow={true}>
          {`По ${(currentSortMethod.desc || "Дате создания").toLowerCase()}`}
        </Button>
      </div>
      <ul className={`${styles.dropdownList} ${dropdownShow ? styles.open : styles.closed}`} style={{ maxHeight: maxHeight + "px" }} tabIndex={-1} ref={dropdownListRef}>
        <li className={styles.dropdownListHeader}>
          <Icon iconName="filter" />
          <span className={styles.text}>Сортировать по:</span>
        </li>
        {sortMethods.map((item, index) => (
          <li className={styles.dropdownItem} key={item.icon}>
            <label
              className={styles.label}
              data-index={index}
              onMouseDown={(e) => handleCurrentSortMethodChoice(Number(e.currentTarget.dataset.index))}
            >
              <input
                className={styles.radio}
                type="radio"
                name="dropdown"
                onKeyDown={(e) => handleKeyboardSortMethodChoice(e, index)}
                checked={currentSortMethod.icon === item.icon}
                onChange={() => {}}
              />
              <Icon iconName={item.icon} />
              <span className={styles.desc}>{item.desc}</span>
              <Icon className={styles.check} iconName="check" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
