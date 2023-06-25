/* eslint-disable no-unused-vars */
import { useState } from 'react'

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      if (isSignUp && password !== confirmPassword) {
        setError('Passwords need to match!')
      }
      console.log('Post request to database')
    } catch (error) {
      console.log('Error')
    }
  }

  const isSignUp = true
  return (
    <div className="auth-modal">
      <div className="close-button" onClick={handleClick}>
        ❌
      </div>
      <h2>{isSignUp ? 'createAccount()' : 'signIn()'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="eMail"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="confirmPassword"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h3>appComingSoon</h3>
      AUTH MODAL
    </div>
  )
}
export default AuthModal
