/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const authToken = false

  const handleClick = () => {
    console.log('clicked')
    setShowModal(true)
  }

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <div className="Home">
        {/* <h1>Find your Dev-partner today!</h1> */}
        <h1>swipeRight!®</h1>

        <button className="primary-button" onClick={handleClick}>
          {authToken ? 'Signout' : 'Create Account'}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} />}
      </div>
    </div>
  )
}

export default Home
