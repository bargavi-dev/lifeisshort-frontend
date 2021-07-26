import React from 'react'
import styled from 'styled-components'
import samosaPhotoHome from './../../assets/images/samosas-with-chicken-fillet-green-herbs.jpg';

export default function Header() {
    return (
        <HeaderMain>

            <HeaderTitles >
                <MainTitle>Life is Short,</MainTitle>
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
`

const Subtitle = styled.span `
    font-size: 28px;
`

const MainImg = styled.img `
    width: 100%; 
`