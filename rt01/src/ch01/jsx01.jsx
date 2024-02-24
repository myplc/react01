import React from "react";
function Book(props){
    return (
        <div>
        <h1>{`이 책 이름은 ${props.name}입니다.`}</h1>
        <h1>{`이 책은 ${props.page} 페이지로 이뤄져 있습니다.`}</h1>
        </div>
    )
}
export default Book;