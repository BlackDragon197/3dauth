import React, { useState } from "react";
import Layout from "../components/Layout";
import { getUserProfile, authInitialProps, getBtcPrice } from "../lib/auth";
import ProfileMenu from "../components/ProfileMenu";
import CurrentIndex from '../components/CurrentIndex'


export default class Profile extends React.Component{
    
   


  

    render(){
        return(
            <Layout title="Мой аккаунт" {...this.props}>
            <CurrentIndex />
           {/* <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
            Текущий Индекс*/}
            <ProfileMenu />
            </Layout>
        )
    }
}

Profile.getInitialProps = authInitialProps(true)