import React, { useEffect, useRef, useState } from "react";

import styles from "./Dropdown.module.scss";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: Option[];
  control: React.ReactNode; // custom trigger element
  onChange?: (value: string | number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, control, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string | number) => {
    onChange?.(value);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <div onClick={handleToggle} className={styles.dropdown__control}>
        {control}
      </div>

      {isOpen && (
        <ul className={styles.dropdown__menu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={styles.dropdown__item}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
export type { DropdownProps, Option };
