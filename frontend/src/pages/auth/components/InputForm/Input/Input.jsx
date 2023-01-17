import React from "react"
import styles from "./Input.module.css"

const Input = ({ type, value, valueChangeHandler }) => {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={valueChangeHandler}
      value={value}
    />
  )
}

export default React.memo(Input)
