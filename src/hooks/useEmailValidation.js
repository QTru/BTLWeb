import { useState } from 'react'

/**
 * Hook để kiểm tra và xử lý đăng ký email
 */
export function useEmailValidation() {
  const [emailError, setEmailError] = useState(false)
  const [email, setEmail] = useState('')

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleEmailChange = (value) => {
    setEmail(value)
    if (emailError) {
      setEmailError(false)
    }
  }

  const validateAndSubmit = (onSuccess) => {
    if (!emailPattern.test(email)) {
      setEmailError(true)
      return false
    }
    setEmailError(false)
    onSuccess && onSuccess()
    setEmail('')
    return true
  }

  return { email, emailError, handleEmailChange, validateAndSubmit }
}
