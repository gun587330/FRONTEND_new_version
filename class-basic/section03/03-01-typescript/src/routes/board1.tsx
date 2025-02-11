import { useState } from "react"

const Board = () => {

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [isActive, setIsActive] = useState(false)

    
    const onChangeWriter = (event) => {
        // console.log(event.target.value)
        setWriter(event.target.value)

        if ( event.target.value !== "" && title !== "" && contents !== "" ) {
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if ( event.target.value !== "" && writer !== "" && contents !== "" ) {
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if ( event.target.value !== "" && title !== "" && event.target.value !== "" ) {
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
    }

    const onClickSubmit = () => {
        console.log(writer, title, contents)
        alert("등록 완료")
        // if (writer === "" || title === "" || contents === "") {
        //     alert("에러")
        // }
        // else {
        //     setIsActive(true)
        //     alert("등록 완료")
        // }
    }

    const 철수의스타일 = {
        // 오 새로운 문법 발견!!
        backgroundColor: isActive === true ? "yellow" : "gray"

        // backgroundColor: "yellow",
        // color: "white"
    }

    return (
        <div>
            작성자: <input type="text" onChange={onChangeWriter}/> <br />
            제목: <input type="text" onChange={onChangeTitle} /> <br />
            내용: <input type="text" onChange={onChangeContents} /> <br />
            <button onClick={onClickSubmit} style={철수의스타일}>등록하기</button>
        </div>
    )
}

export default Board