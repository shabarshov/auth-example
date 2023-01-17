import React, { useCallback } from "react"
import Alert from "./Alert/Alert"

import styles from "./AlertContainer.module.css"

const AlertContainer = ({ errors }) => {
  const getAlerts = useCallback(() => {
    const alerts = errors.map((error, index) => (
      <Alert
        message={error}
        key={index}
      />
    ))
    return alerts
  }, [errors])

  return <div className={styles.container}>{getAlerts()}</div>
}

export default AlertContainer
