import React, { useEffect, useState } from 'react';
import SignOut from "./SignOut.jsx";
import { auth, db } from "../firebase.js";
import SendMessage from './SendMessage.jsx';
import { format } from 'date-fns';

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db
        .collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) =>{
            setMessages(snapshot.docs.map((doc) => doc.data({serverTimestamps: "estimate"}))) /*様々なデータから成るsnapshotのうち、docsの中からmap関数（= for each）でdocというデータを取り出す。取り出したものをmessagesの中に入れていく*/
        });
    }, []); /*第2引数に空の配列を入れることで、初めのみuseEffectを使うことになる*/
    return (
    <div>
        <SignOut />
        <div className = "msgs">
            {messages.map(({id, text, photoURL, uid, createdAt}) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent": "received"}`}> {/* 自分が送信したのであればsent, そうでなければreceivedを付与*/}
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                    <p className = {`${uid === auth.currentUser.uid ? "time-sent": "time-received"}`}>
                        {("0" + createdAt.toDate().getHours()).slice(-2) + ":" + ("0" + createdAt.toDate().getMinutes()).slice(-2)}
                    </p>
                </div>
            ))}
        </div>
        <SendMessage />
    </div>
  )
}

export default Line