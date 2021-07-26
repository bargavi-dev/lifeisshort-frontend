import React from 'react'
import styled from 'styled-components'
import samosaPhotoHome from './../../assets/images/samosas-with-chicken-fillet-green-herbs.jpg';
import samosaLogo from '../../assets/images/eat-the-samosa-logo.gif';
// import eatTheSamosaLogo from '../../assets/images/eat-the-samosa-logo.svg';

export default function Header() {
    return (
        <HeaderMain>

            <HeaderTitles >
                <MainTitle>Life is Short,</MainTitle>
                    <img width="500" height="499.9" src={samosaLogo} alt=''></img>           
                <Subtitle>Recipes and tips for delicious South Indian-style dishes and more</Subtitle>
            </HeaderTitles>
            <MainImg src={samosaPhotoHome} alt=''></MainImg>
            <a href='https://www.freepik.com/photos/food'>Food photo created by timolina - www.freepik.com</a>
        </HeaderMain>
      
    )
}


// eslint-disable-next-line no-undef
const HeaderMain = styled.div `
    padding-top: 20px;
    margin: center;
    position: relative;
`

const HeaderTitles = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Reenie Beanie', cursive;
`
const MainTitle = styled.span `
    font-size: 35px;
    font-style: bold;
    margin-bottom: -30px;
    z-index: 1;
`

const Subtitle = styled.span `
    font-size: 30px;
    margin-top: -170px;
    justify-content: center;

`

const MainImg = styled.img `
    width: 100%; 
`