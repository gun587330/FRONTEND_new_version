"use client"
import { useMutation, gql } from "@apollo/client"
import { ChangeEvent, useState } from "react";
/* [게시글 등록] input 타입에 직접 입력한 값을 state를 통해 graphQL 통신 연습 */

/*************** [GraphQL Setting]-한 번 세팅 후 신경 ㄴㄴ ***************/
// gql : graphQL 포장해주는 녀석
const 나의그래프큐엘셋팅 = gql`
    #### 지정된 문법이라 그냥 암기해야 함 ####
    mutation createBoard(
        # 타입 적는 곳
        $mywriter: String
        $mytitle: String
        $mycontents: String
    ){
        # 전달할 변수 작성
        createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents){
            _id
            number
            message
        }
    }
`;
/********************************************************************/

export default function GraphqlMutationPage(){
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    /* event handler function */

    // [ts]변경됐을 때 해당하는 타입: ChangeEvent -> React에서 제공
    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => { // 뜻: HTMLInputElement가 바뀌었을 때 타입!!
        setWriter(e.target.value);
    };
    // [ts]변경됐을 때 해당하는 타입: ChangeEvent -> React에서 제공
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => { 
        setTitle(e.target.value);
    };
    // [ts]변경됐을 때 해당하는 타입: ChangeEvent -> React에서 제공
    const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
        setContents(e.target.value);
    };




    const [나의함수] = useMutation(나의그래프큐엘셋팅);
    const onClickSubmit = async () => {
        // 여기서 graphql 요청하기
        const result = await 나의함수({
            //variables가 $의 역할을 함
            variables: {
                mywriter: writer,
                mytitle: title,
                mycontents: contents,
            },
        });
        console.log(result);
    }

    //한 줄 작성할 때는 return에 소괄호로 감싸주지 않아도 됨
    return (
        <>
            <input type="text" placeholder="작성자 입력" onChange={onChangeWriter} style={{border: "1px solid red"}}></input><br /><br />
            <input type="text" placeholder="제목 입력" onChange={onChangeTitle} style={{border: "1px solid red"}}></input><br /><br />
            <input type="text" placeholder="내용 입력" onChange={onChangeContents} style={{border: "1px solid red"}}></input><br /><br />

            <button onClick={onClickSubmit} style={{color: 'red'}}>GRAPHQL-API 요청하기</button>
        </>
    )
}