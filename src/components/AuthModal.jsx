import { useState } from 'react'

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, ]

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const isSignUp = true
  return (
    <div className="auth-modal">
      <div className="close-button" onClick={handleClick}>
        ❌
      </div>
      <h2>{isSignUp ? 'createAccount()' : 'signIn()'}</h2>
      <form onSubmit={handleSubmit}></form>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="eMail"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      AUTH MODAL
    </div>
  )
}
export default AuthModal
