import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => 
{
  const googleAuth = useGoogleLogin({
    clientId: 874934368638-v7dtscnojaffh40c091bd0msjl0j5idl.apps.googleusercontent.com /** Our clientID Possible change.  */
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
