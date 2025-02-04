import { WebAuthnSigner } from '@dfns/sdk-browser'
import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'

export default function Register(): JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const register = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      const formData = new FormData(event.currentTarget)

      // Start delegated registration flow. Server needs to obtain the challenge with the appId
      // and appOrigin of the mobile application. For simplicity, they are included as part of
      // the request body. Alternatively, they can be sent as headers or with other approaches.
      const initRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/register/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          username: formData.get('username') as string,
        }),
      })
      const challenge = await initRes.json()
      console.log(JSON.stringify(challenge, null, 2))

      // Webauthn flow
      // Create the new webauthn credential using the challenge
      const webauthn = new WebAuthnSigner()
      const attestation = await webauthn.create(challenge)
      console.log(JSON.stringify(attestation, null, 2))

      // Finish delegated registration
      const completeRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/register/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          signedChallenge: { firstFactorCredential: attestation },
          temporaryAuthenticationToken: challenge.temporaryAuthenticationToken,
        }),
      })

      setResponse(await completeRes.json())
      setError(undefined)
    } catch (error: any) {
      setResponse(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={register}>
      <div className="w-full">
        <h2>Delegated Registration</h2>
        <p>
          For this tutorial, you will register a Dfns EndUser, and this is where the registration flow starts. However,
          in your final app, the flow may be different and the username might come from your internal system.
        </p>
        <p>
          After registration, the new end user will have an Ethereum testnet wallet and assigned the system permission,
          `DfnsDefaultEndUserAccess`, that grants the end user full access to their wallets.
        </p>
        <p>Enter the email as the username you are registering, and hit the "Register EndUser" button.</p>
        <div className="flex items-center gap-2">
          <input type="email" name="username" placeholder="Choose a username" className="input" />
          <button className="btn" type="submit">
            Register EndUser
          </button>
        </div>

        {!!loading && <span>registering ...</span>}

        {!!response && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(response, null, 2)}</pre>
        )}

        {!!error && <div className="text-red-700">{JSON.stringify(error, null, 2)}</div>}

        <p>
          <Link to="/" className="btn no-underline">
            ← Back to main page
          </Link>
        </p>
      </div>
    </form>
  )
}
