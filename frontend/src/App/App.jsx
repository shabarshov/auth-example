import React from "react"
import AuthCard from "../pages/auth/components/AuthCard/AuthCard"

import styles from "./App.module.css"

const App = () => {
  return <div className={styles.container}>{<AuthCard />}</div>
}

export default App
