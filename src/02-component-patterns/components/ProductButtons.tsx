import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //TODO: maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);
  // TODO: isMaxReached = useCallback, dependencias [ counter, maxCount ]
  // devuele true si counter === maxCount
  let isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
