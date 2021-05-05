import React, { useState } from 'react'
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import styled from 'styled-components'

function ChatInput({sendMessage}) {

    const [ input, setInput ] = useState("")

    const send = (e) => {
        e.preventDefault();
        if(!input) return
        sendMessage(input)
        setInput("")
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input
                        onChange={(e)=> setInput(e.target.value)} 
                        type="text"
                        value={input}
                        placeholder="Mesaage here..." />
                    <SendButton
                        type='submit'
                        onClick={send}>
                        <SendTwoToneIcon/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 45px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            height: 20px;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`
const SendButton = styled.button`
    background: #00acff;
    border-radius: 2px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #0870a2
    }
`