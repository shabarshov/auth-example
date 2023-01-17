import React from "react"
import styles from "./Title.module.css"

const Title = ({ value }) => {
  return <p className={styles.title}>{value}</p>
}

export default Title
