import React, { useState } from 'react'
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {
    const [message, setMessage] = useState("")
    function sendMessage(e) {
        e.preventDefault(); //イベント（e）が生じても、再ロードされないようにする

        const { uid, photoURL } = auth.currentUser

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setMessage("");
    }
  return (
    <div>
        <form onSubmit={sendMessage}> {/* onSubmitプロパティは、フォームに入力してEnterキーを押したら、onSubmitの中の関数が読まれる */}
            <div className="sendMsg">
                <Input
                style={{
                    width: "78%",
                    fontsize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px"
                }}
                placeholder="メッセージを入力してください"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value = {message}/>
                <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px"}} />
            </div>
            
        </form>
    </div>
  )
}

export default SendMessage