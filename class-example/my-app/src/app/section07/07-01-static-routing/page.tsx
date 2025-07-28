"use client" // React 구버전으로 다운그레이드

// Q) use client 써서 다운그레이드 했는데, 왜 React18버전 이상에서만 되는 "next/navigation" 라이브러리로 import해야 에러가 안나지?
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";

export default function StaticRoutingPage(){
    const 라우터 = useRouter();

    const onClickSubmit = () => {
        // 1. 게시글 등록하기

        // ...

        // 2. 등록된 페이지로 이동하기
        라우터.push("/section07/07-01-static-routing-moved");
    };

    return(
        <button onClick={onClickSubmit}>게시글 등록하기</button>
    )
}