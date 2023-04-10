import React, { FC, ReactNode, MouseEvent } from 'react';

import styles from './myButton.module.css';

interface MyButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default MyButton;
