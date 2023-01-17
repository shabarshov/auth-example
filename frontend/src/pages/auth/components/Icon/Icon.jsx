import React from "react"
import styles from "./Icon.module.css"

import { IconContext } from "react-icons/lib"

const Icon = ({ icon, iconStyles }) => {
  const { marginStyle, ...otherStyles } = iconStyles

  return (
    <IconContext.Provider value={iconStyles}>
      <div
        className={styles.container}
        style={{ margin: iconStyles.margin }}
      >
        {icon()}
      </div>
    </IconContext.Provider>
  )
}

export default React.memo(Icon)

// import { RxCross1 } from "react-icons/rx"
