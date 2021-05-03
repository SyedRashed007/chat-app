import React from 'react'
import styled from 'styled-components'
import { sidebarItems } from '../data/SidebarName'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

function Sidebar() {
    return (
        <Container>
            <NameContainer>
                    <h3>Messaging App</h3>
                    <img src="https://img.icons8.com/wired/50/000000/chat.png" alt=""/>
            </NameContainer>
            <MainGroups>
            <AddGroups>
                Add Group
            <GroupLogo>
                <AddCircleTwoToneIcon/>
            </GroupLogo>
            </AddGroups>
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

    img{
        margin-right: 15px;
        cursor: pointer;
    }
`
const MainGroups = styled.div`
    padding-top: 20px;
`
const AddGroups = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: x-large;
`
const GroupLogo = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center
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
