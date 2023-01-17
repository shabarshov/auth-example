import { useState, useCallback, useMemo } from "react"

const useIconStyles = (initialColor, initialSize, initialMargin) => {
  const [color, setColor] = useState(initialColor)
  const [size, setSize] = useState(initialSize)
  const [margin, setMargin] = useState(initialMargin)

  const styles = useMemo(() => {
    return {
      color: color,
      size: size,
      margin: margin,
    }
  }, [color, size, margin])

  const updateStyles = useCallback(
    ({ color = "#eee", size = "24px", margin = "0px 6px" }) => {
      setColor(color)
      setSize(size)
      setMargin(margin)
    },
    [setColor, setSize, setMargin]
  )

  return [styles, updateStyles]
}

export default useIconStyles
