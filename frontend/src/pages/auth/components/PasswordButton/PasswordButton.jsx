import React from "react"
import Icon from "../Icon/Icon"
import useIconStyles from "../../../../hooks/useIconStyles"

import { BsEye, BsEyeSlash } from "react-icons/bs"

import styles from "./PasswordButton.module.css"

const PasswordButton = ({ condition, clickHandler }) => {
  const [iconStyles, updateIconStyles] = useIconStyles("eee", "26px", "0px 6px")

  return (
    <button
      className={styles.passwordButton}
      onClick={clickHandler}
    >
      <Icon
        icon={condition ? BsEyeSlash : BsEye}
        iconStyles={iconStyles}
      />
    </button>
  )
}

export default React.memo(PasswordButton)
