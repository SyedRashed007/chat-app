import React from 'react'
import styled from 'styled-components' 

function Header() {
    return (
        <Container>
            <UserInformation>
                <Name>
                    <h4>Syed Rashed</h4>
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" alt=""/>
                </UserImage>
            </UserInformation>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex; 
    background-color: #11a5ec;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`
const UserInformation = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    padding-right: 15px;
    right: 0
`
const Name = styled.div`
    padding-right: 15px;
`
const UserImage = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 2px;
    border: 1px solid #97d5f3;

    img {
        width: 100%
    }
`