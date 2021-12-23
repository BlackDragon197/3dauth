import React, { useState } from "react";
import Layout from "../components/Layout";
import LayoutMob from "../components/mobile/LayoutMob";
import { getUserProfile, authInitialProps, getBtcPrice } from "../lib/auth";
import ProfileMenu from "../components/ProfileMenu";
import CurrentIndex from '../components/CurrentIndex'
import CurrentIndexMob from '../components/mobile/CurrentIndexMob'
import DynamicWidth from '../components/DynamicWidth'
import useDeviceSize from "../components/DynamicWidth";
import MobileMenuProfile from "../components/mobile/MobileMenuProfile";
import ProfileMenuMob from "../components/mobile/ProfileMenuMob";
export default class Profile extends React.Component{

    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
      }

      componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
      }

    render(){

        return(
            <div>
            { this.state.matches && (<Layout title="Мой аккаунт" {...this.props}>
            <CurrentIndex />
           {/* <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
            Текущий Индекс*/}
            <ProfileMenu />
            </Layout>)}
            {!this.state.matches && (
                <div id="outer-container">
                    <MobileMenuProfile customBurgerIcon={ <img src="public/mobile/icon.png" /> }  pageWrapId={"page-wrap"} />
                    <div id="page-wrap">
                        <LayoutMob title="Мой аккаунт" {...this.props}>
                        <ProfileMenuMob />
                        </LayoutMob>
                    </div>
                </div>
            )}
            </div>
        )
    }
}

Profile.getInitialProps = authInitialProps(true)