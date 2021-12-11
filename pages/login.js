import Layout from "../components/Layout"
import LoginForm from "../components/LoginForm"
import { authInitialProps } from "../lib/auth"


export default function Login(props){
    return (
        
      <LoginForm />
      
    )
}

Login.getInitialProps = authInitialProps()