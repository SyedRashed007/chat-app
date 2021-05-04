import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/0.jpg" alt=""/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Syed Rashed
                    <span>05/04/2021 04:49:59 PM</span>
                </Name>
                <Text>
                    Looking Great
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #cbdef3;
    }
`
const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;

    img{
        width:100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.5;
    span{
        margin-left: 15px;
        font-weight: 400;
        color: #a09797;
        font-size: 12px;
    }
`
const Text = styled.span`
`