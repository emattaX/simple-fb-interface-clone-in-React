import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase"
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {

	const [state, dispatch] = useStateValue() 

	const signIn = () => {
		//sign in...
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				})
			})
	}

	return (
		<div className='login'>
			<div className='login__logo'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png" alt="" />
				<img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />	
			</div>
			<Button type="submit" onClick={signIn}>Log In</Button>
		</div>
	)
}

export default Login