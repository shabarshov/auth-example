import React, { useCallback, useState } from "react"

import Input from "./Input/Input"
import PasswordButton from "../PasswordButton/PasswordButton"
import Icon from "../Icon/Icon"

import useIconStyles from "../../../../hooks/useIconStyles"

import { SlUser } from "react-icons/sl"
import { SlLock } from "react-icons/sl"

import styles from "./InputForm.module.css"

const InputForm = ({ isPassword, value, valueChangeHandler }) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(isPassword)
  const [iconStyles, updateIconStyles] = useIconStyles("eee", "24px", "0px 6px")

  const passwordButtonHandler = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden)
  }, [isPasswordHidden])

  return (
    <div className={styles.inputForm}>
      <Icon
        icon={isPassword ? SlLock : SlUser}
        iconStyles={iconStyles}
      />
      <Input
        type={isPasswordHidden ? "password" : "text"}
        value={value}
        valueChangeHandler={valueChangeHandler}
      />
      {isPassword ? (
        <PasswordButton
          condition={isPasswordHidden}
          clickHandler={passwordButtonHandler}
        />
      ) : null}
    </div>
  )
}

export default React.memo(InputForm)
