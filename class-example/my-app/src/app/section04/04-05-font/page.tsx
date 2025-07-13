"use client"
import styles from "./styles.module.css";
export default function FontPage() {
    //글로벌폰트는 globals.css에 전역 선언으로 사용해야 함
    return(
        <>
            <div>글로벌 font를 보여주자</div>
            <div className={styles.폰트를보여주자}>지정한 font를 보여주자</div>
        </>
    )
}

