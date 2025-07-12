import Link from 'next/link'; // next에 내장되어 있는 기능

/* next에서는 Route 기능이 내장되어 있어 'react-router-dom'을 따로 설치하지 않아도 됨 */
//import { Link } from "react-router-dom"

const Aaa = () => {
        
    return (
        <div>
            <div>Aaa 페이지 입니다.</div>

            {/* 1. 리액트 이동방식 : 현재페이지에서 JS로 태그만 바꿔치기 => SPA(Single Page Application) */}
            <Link href={"/section04/04-01-bbb"}>Bbb 페이지로 이동</Link>
            {/*next에서는 Link to가 아니라 Link href*/}
            
            {/* 2. 고전HTML 이동방식 : HTML페이지 새로접속함(느림) => MPA(Multiple Page Application) */}
            <a href="/section04/04-01-bbb">Bbb 페이지로 이동</a>
        </div>
    )
}

export default Aaa;