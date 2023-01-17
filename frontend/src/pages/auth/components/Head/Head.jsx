import React from "react"
import Title from "./Title/Title"
import SwitchButton from "./SwitchButton/SwitchButton"

import styles from "./Head.module.css"

const Head = ({ titleValue, buttonValue, clickHandler }) => {
  return (
    <div className={styles.head}>
      <Title value={titleValue} />
      <SwitchButton
        value={buttonValue}
        clickHandler={clickHandler}
      />
    </div>
  )
}

export default React.memo(Head)
