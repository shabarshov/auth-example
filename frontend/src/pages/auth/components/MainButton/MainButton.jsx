import React from "react"
import styles from "./MainButton.module.css"

const MainButton = ({ value, clickHandler }) => {
  return (
    <button
      className={styles.mainButton}
      onClick={clickHandler}
    >
      {value}
    </button>
  )
}

export default React.memo(MainButton)
