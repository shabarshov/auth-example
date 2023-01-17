import React from "react"

import Icon from "../../Icon/Icon"

import { BsExclamationLg } from "react-icons/bs"
import useIconStyles from "../../../../../hooks/useIconStyles"
import styles from "./Alert.module.css"

const Alert = ({ message }) => {
  const [iconStyles, updateIconStyles] = useIconStyles("red", "24px", "0px 2px")

  return (
    <div className={styles.container}>
      <Icon
        icon={BsExclamationLg}
        iconStyles={iconStyles}
      />
      <div className={styles.alert}>{message}</div>
    </div>
  )
}

export default React.memo(Alert)
