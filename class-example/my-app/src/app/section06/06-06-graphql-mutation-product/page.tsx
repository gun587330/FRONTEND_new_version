"use client"
import { useMutation, gql } from "@apollo/client"
/* [프로덕트 등록] graphQL 통신 연습 */

/* gql : graphQL 포장해주는 녀석 */
const CREATE_PRODUCT = gql`
    ####### graphQL에서 작성한 내용 복붙 or 가공 #######
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ # 타입 작성 위치(문법) & 타입은 GraphiQL에서 Check
        createProduct(
            seller: $seller
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        // 여기서 graphql 요청하기
        const result = await 나의함수({
            //variables가 $의 역할을 함
            variables: {
                seller: "Hong Gil Dong",
                createProductInput: { 
                    // 객체로 들어감 & 여긴 GraphQL이 아니라 JS기 떄문에 콤마(,)가 있어야 함
                    name: "키보드",
                    detail: "매우 좋은 키보드입니다",
                    price: 1000000 // input창을 통해 받을 땐 주의! 일반적으로 input으로 받으면 문자열로 인식되기에 숫자로 바꿔줘야 함!!
                },
            },
        });
        console.log(result);
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}