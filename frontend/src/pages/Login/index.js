import React from 'react'

import api from '../../services/api'

import GoogleLogin from 'react-google-login'
import logoGoogle from '../../assets/logoGoogle.png'
import './styles.css'

export default function Login() {

    async function responseGoogle(response) {
        console.log(response.profileObj)
        const { email, googleId, imageUrl, name } = response.profileObj

        try {
            const result = await api.post('/login', {
                email,
                password: googleId
            })
            console.log(result)
        } catch (error) {
            if (error.response.data.Object === 'error') {
                return alert(error.response.data.error)
            }

            if (error.response.data.Object === 'warning') {
                return alert(error.response.data.warning)
            }
            
            console.log(error.response.data)
        }
    }

    return (
        <main className="container">
            <h1 className="title"> Log in </h1>

            <GoogleLogin
                clientId="71465122959-0vrriuu5q09gbmp3shc918uuvtvqf90r.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled}> <img style={{ width: 22, height: 22 }} src={logoGoogle} alt="Logo Google"/> <p style={{ marginLeft: 10, fontFamily: 'Roboto', fontWeight: 700 }}> Log in with Google  </p> </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <footer className="footer"> Ednan Dias, todos os direitos reservados ©2020 </footer>
        </main>
    )
}