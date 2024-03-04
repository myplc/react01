import Comment from "./cpnt";
const comments = [
    { user: "홍길동", content: "ㅋㅋㅋ뭐라니?" },
    { user: "짱구", content: "난 배가고파서 더 이상 못하겠다.?" },
    { user: "지나가는", content: "항상 이기는건 자신과의 전쟁뿐?" },
];
const Commentlist = (props) => <div>{
    comments.map((v) =>
        <Comment user={v.user} content={v.content} />
    )}</div>

export default Commentlist