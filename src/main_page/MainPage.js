import React from 'react'
import TopContainer from '../top_container/TopContainer'
import PrimaryAppBar from '../app_bar/PrimaryAppbar'
import { Container } from '@mui/material'
// import BaMenu from '../menu/BasicMenu'
import AppMenu from '../menu/AppMenu'
import AppTabs from '../tabs/AppTabs'
import MainBody from '../main_body/MainBody'
import MainFooter from '../main_footer/MainFooter'
const MainPage = () => {
  return (
    <>
    <Container>
        <TopContainer/>
        <PrimaryAppBar/>
        <AppMenu/>
        <MainBody/>
    </Container>
        <MainFooter/>

    </>
  )
}

export default MainPage