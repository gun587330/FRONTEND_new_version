import Link from 'next/link'; // next에 내장되어 있는 기능

/* next에서는 Route 기능이 내장되어 있어 'react-router-dom'을 따로 설치하지 않아도 됨 */
//import { Link } from "react-router-dom"

const Bbb = () => {
    return (
        <div>
            <div>Bbb 페이지 입니다.</div>

            <Link href={"/section04/04-01-aaa"}>Aaa 페이지로 이동</Link>
            {/*next에서는 Link to가 아니라 Link href*/}
        </div>
    )
}

export default Bbb;