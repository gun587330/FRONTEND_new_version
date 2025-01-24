import { useState } from "react"


// Refactoring : 기능은 똑같은데 내부 code만 효율적으로 바뀐 것!! (결과가 바뀐 것이 아님!!)
const BoardRefactoring = () => {

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [isActive, setIsActive] = useState(false)

    
    const onChangeWriter = (event) => {
        // console.log(event.target.value)
        setWriter(event.target.value)

        if ( event.target.value && title && contents) return setIsActive(true)
        setIsActive(false)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)

        // code가 한 줄만 있기 떄문에 중괄호( {} ) 생략함! / 한 줄만 생략 가능!
        if ( event.target.value && writer && contents) return setIsActive(true)
        setIsActive(false)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if ( event.target.value && title && writer) return setIsActive(true)
        setIsActive(false)
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

export default BoardRefactoring