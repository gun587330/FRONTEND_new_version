"use client"
import { useMutation, gql } from "@apollo/client"
/* [게시글 등록] input 타입에 직접 입력한 값을 state를 통해 graphQL 통신 연습 */

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

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async () => {
        // 여기서 graphql 요청하기
        const result = await 나의함수({
            //variables가 $의 역할을 함
            variables: {
                mywriter: "혼발놈",
                mytitle: "안녕하세요",
                mycontents: "하아히아",
            },
        });
        console.log(result);
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}