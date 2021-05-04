import React, {useEffect} from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import {useParams} from 'react-router-dom'
import { useState } from 'react'

function Chat() {

    let {groupId} = useParams();
    const [ group, setGroup ] = useState();
    const [ messages, setMessages ] = useState([])

    const getMessages = () => {
        db.collection('rooms')
        .doc(groupId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc) => doc.data())
            console.log(messages)
            setMessages(messages)
        })
    }

    const getGroup = () => {
        db.collection('rooms')
        .doc(groupId)
        .onSnapshot((snapshot)=>{
            setGroup(snapshot.data());
        })
    }

    useEffect(()=>{
        getGroup();
        getMessages();
    }, [groupId])

    return (
        <Container>
            <Header>
                <Group>
                    <GroupName>
                        • {group && group.name}
                    </GroupName>
                    <GroupInfo>
                        Encryption: Messages are end-to-end encrypted.
                    </GroupInfo>
                </Group>
            </Header>
            <MessageContainer>
            {
                messages.length > 0 &&
                messages.map((data, index)=>(
                <ChatMessage
                    text={data.text}
                    name={data.name}
                    image={data.userImage}
                    timestamp={data.timestamp}
                />
                ))
            }
            </MessageContainer>
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
