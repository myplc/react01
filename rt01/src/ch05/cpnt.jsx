// import React from "react";
const style ={
    wrapper:{
        height: 60,
        margin:8,
        padding:10,
        border: '1px solid gray',
        borderRadius:16
    },
    user:{
        color:'darkGray',
        fontWeight:'bold',
        textSize:'2em'
    },
    texter:{
        color:'blue',
        textSize:'1.5em'
    },
    box:{
        float:'left',
        marginRight:'10px',
        width:60,
        height:'100%',
        border: '1px solid gray',
        borderRadius: 10,
    }
}

const Comment = props => 
    <div style={style.wrapper}>
        <div style={style.box}></div>
        <div style={style.user}>{props.user}</div>
        <div style={style.texter}>{props.content}</div>
    </div>

export default Comment