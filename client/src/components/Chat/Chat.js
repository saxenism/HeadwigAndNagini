import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import mp3File from './537061__imafoley__message-pop-sound.wav';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import TextContainer from '../TextContainer/TextContainer.js';
import Messages from '../Messages/Messages.js';
import InfoBar from '../InfoBar/InfoBar.js';
import Input from '../Input/Input.js';

const ENDPOINT = 'https://vaarta.herokuapp.com/';

let socket;

const Chat = ({location}) => {
    const [play] = useSound(mp3File);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        //console.log(socket);
        socket.emit('join', {name: name, room: room}, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect (() => {
        socket.on('message', (message) => {          
            setMessages(messages => [...messages, message]);
        }, );
        
        socket.on("roomData", ({users}) => {
            setUsers(users);
        });

    }, []);

    useEffect(() => {play(mp3File)}, [messages, users]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    }

    return (
        <div className = "outerContainer">
            <div className = 'container'>
                <InfoBar room = {room}/>
                <Messages messages = {messages} name = {name} />
                <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage} />
            </div>
        <TextContainer users = {users} />    
        </div>
    );
}

export default Chat;