import React from 'react'
import styled from 'styled-components'
import { sidebarItems } from '../data/SidebarName'

function Sidebar() {
    return (
        <Container>
            <NameContainer>
                <Name>
                    <h3>Messaging App</h3>
                </Name>
                <Logo>
                    <img src="https://img.icons8.com/wired/50/000000/chat.png" alt=""/>
                </Logo>
            </NameContainer>
            <MainGroups>
                {
                    sidebarItems.map(item => (
                        <ItemContainer>
                            {item.icon}
                            {item.text}
                        </ItemContainer>
                    ))
                }
            </MainGroups>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: #00acff;
`
const NameContainer = styled.div`
    color: black;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    justify-content: space-between;
    border-bottom: 1px solid #11a5ec;
`
const Name = styled.div`
`
const Logo = styled.div`
    margin-right: 15px;
    cursor: pointer;
`
const MainGroups = styled.div`
    padding-top: 20px;
`
const ItemContainer = styled.div`
    color: #272424;
    display: grid;
    height: 40px;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    font-size: large;
    :hover{
        background: #248fc1;
    }

`
