import React, { useCallback, useState } from "react"

import useFetch from "../../../../hooks/useFetch"

import Head from "../Head/Head"
import InputForm from "../InputForm/InputForm"
import MainButton from "../MainButton/MainButton"
import AlertContainer from "../AlertContainer/AlertContainer"

import styles from "./AuthCard.module.css"

const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [request, errors, clearErrors] = useFetch()

  const emailChangeHandler = useCallback(
    (event) => setEmail(event.target.value),
    [setEmail]
  )

  const passwordChangeHandler = useCallback(
    (event) => setPassword(event.target.value),
    [setPassword]
  )

  const switchSignUp = useCallback(() => {
    setIsSignUp(!isSignUp)
  }, [isSignUp])

  const mainButtonHandler = useCallback(async () => {
    const user = {
      email: email,
      password: password,
    }

    const url = isSignUp ? "/auth/register" : "/auth/login"
    const method = "POST"
    const body = JSON.stringify(user)
    const headers = {
      "Content-Type": "application/json",
    }

    const response = await request(url, method, body, headers)
    console.log(errors)
  }, [email, password, isSignUp, request, errors])

  return (
    <div className={styles.container}>
      <Head
        titleValue={isSignUp ? "Sign Up" : "Sign In"}
        buttonValue={isSignUp ? "Sign In" : "Sign Up"}
        clickHandler={switchSignUp}
      />
      <InputForm
        isPassword={false}
        value={email}
        valueChangeHandler={emailChangeHandler}
      />
      <InputForm
        isPassword={true}
        value={password}
        valueChangeHandler={passwordChangeHandler}
      />
      <MainButton
        value={isSignUp ? "Sign Up" : "Sign In"}
        clickHandler={mainButtonHandler}
      />
      {errors.length !== 0 && <AlertContainer errors={errors} />}
    </div>
  )
}

export default AuthCard
