import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
                <h1 className = "heading">Join</h1>
                    <div><input placeholder = "Name" className = "joinInput" type = "text" onChange={(event) => setName(event.target.value)} /></div> 
                    <div><input placeholder = "Room" className = "joinInput mt-20" type = "text" onChange={(event) => setRoom(event.target.value)} /></div> 
                    <Link onClick = {event => (!name || !room) ? event.preventDefault() : null} to = {`/chat?name=${name}&room=${room}`}>
                        <button className={"button mt-20"} type="submit">Sign In</button>
                    </Link>        
            </div>
        </div>
    );
}

export default Join;
First things first: The first part of the video has shitty quality, please bear with it, though.

We have zeroed in on a block-chain backed habit-enabler application, starting with focus on newbie coders.

So, the idea behind this is that most people who want to learn to code, take up the #100daysofcodechallenge, but give it up mid-way. So, we would like to incentive-ise this coding challenge for them.
First, we ask them to stake, say 100 USDT coins, after which we open a superfluid stream to transfer these coins back to the owner over a period of 100 days. Irrespective of their completing the challenge or not, they will always get the principal amount back, but If they successfully complete the challenge, they will also get an interest on the amount that they had staked. 
To check whether they are coding daily or not, ChainLink oracles will communicate with the Superfluid smart stream contract based on responses from using the Github API to check new commits by the user's github handle on a daily basis.

Business Model: Since, Superfluid streams are just in time, we don't need to maintain the entire balance everytime, hence we can use the user's coins for yield farming and keep the interest from it. If the user successfully completes the challenge, a part of the interest will be shared with the user.



    OnChain Drona: A BlockChain-based habit dApp. Integrates Matic, Portis, Superfluid, 


    https://youtu.be/vX6NXgj6CjE