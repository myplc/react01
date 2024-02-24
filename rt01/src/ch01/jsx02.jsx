import React from "react";
import Book from "./jsx01";
function Library(props){
    return(
        <div>
            <Book name='파이썬책' page={377}/>
            <Book name='JS책' page={555}/>
            <Book name='TFJS책' page={777}/>

        </div>
    )
}
export default Library