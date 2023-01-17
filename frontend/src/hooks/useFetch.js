import { useState, useCallback } from "react"

const useFetch = () => {
  const [errors, setErrors] = useState([])

  const clearErrors = useCallback(() => {
    setErrors([])
  }, [])

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        const response = await fetch(url, { method, body, headers })
        const data = await response.json()

        if (!response.ok) {
          if (Array.isArray(data)) {
            setErrors([...data])
          } else {
            setErrors([data.message])
          }

          // throw new Error("Something wrong")
        } else {
          clearErrors()
        }

        return data
      } catch (error) {
        throw error
      }
    },
    [clearErrors]
  )
  return [request, errors, clearErrors]
}

export default useFetch

// import { useState, useCallback } from "react"

// const useFetch = () => {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const request = useCallback(
//     async (url, method = "GET", body = null, headers = {}) => {
//       try {
//         const response = await fetch(url, { method, body, headers })
//         setLoading(true)
//         const data = await response.json()

// if (!response.ok) {
//   throw new Error(data.message || "Something wrong")
// }

//         setLoading(false)

//         return data
//       } catch (error) {
//         setLoading(false)
//         setError(error.message)
//         throw error
//       }
//     },
//     []
//   )

//   const clearError = () => {
//     setError(null)
//   }

//   return [loading, request, error, clearError]
// }

// export default useFetch
