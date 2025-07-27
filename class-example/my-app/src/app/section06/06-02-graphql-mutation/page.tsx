"use client"
import { useMutation, gql } from "@apollo/client"

// gql : graphQL 포장해주는 녀석
const 나의그래프큐엘셋팅 = gql`
    mutation{
    createBoard(
        writer: "홍길동길"
        title: "하소연"
        contents: "아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하는 나의 인생.. 흑흑.."
    ) {
        _id
        number
        message
    }
    }
`

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async () => {
        // 여기서 graphql 요청하기
        const result = await 나의함수();
        console.log(result);
    }

    //한 줄 작성할 때는 return에 소괄호로 감싸주지 않아도 됨
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}