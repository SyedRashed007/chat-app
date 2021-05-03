import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'

function Chat() {
    return (
        <Container>
            <Header>
                <Group>
                    <GroupName>
                        • Group Name
                    </GroupName>
                    <GroupInfo>
                        Encryption: Messages are end-to-end encrypted.
                    </GroupInfo>
                </Group>
            </Header>
            <MessageContainer></MessageContainer>
            <ChatInput/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
    background-color: #e0eff7; 
`
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #9fd3ec;
    justify-content: space-between;
`
const Group = styled.div`
`
const GroupName = styled.div`
    font-weight: 700;
`
const GroupInfo = styled.div`
    font-weight: 400;
    font-size: 13px;
    margin-top: 8px;
`
const MessageContainer = styled.div`
`
