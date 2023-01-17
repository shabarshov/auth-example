import React from "react"
import styles from "./SwitchButton.module.css"

const SwitchButton = ({ value, clickHandler }) => {
  return (
    <button
      className={styles.switchButton}
      onClick={clickHandler}
    >
      {value}
    </button>
  )
}

export default SwitchButton
