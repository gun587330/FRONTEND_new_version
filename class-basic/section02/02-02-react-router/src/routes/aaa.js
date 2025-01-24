import { Link } from "react-router-dom"

const Aaa = () => {
        
    return (
        <div>
            <div>Aaa 페이지 입니다.</div>

            {/* 1. 리액트 이동방식 : 현재페이지에서 JS로 태그만 바꿔치기 => SPA(Single Page Application) */}
            <Link to={"/bbb"}>Bbb 페이지로 이동</Link>
            
            {/* 2. 고전HTML 이동방식 : HTML페이지 새로접속함(느림) => MPA(Multiple Page Application) */}
            <a href="/bbb">Bbb 페이지로 이동</a>
        </div>
    )
}

export default Aaa