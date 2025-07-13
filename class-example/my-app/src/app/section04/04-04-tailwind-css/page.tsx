"use client";

import styles from "./styles.module.css";

export default function CssPage(){
    // 빈 태그로 묶어주는 걸 fragment라고 한다!!
    return (
        <>
            <button className={styles.버튼스타일}>버튼</button>
            <div className={styles.네모상자스타일1}>네모상자</div>
            <br />
            <div className={styles.네모상자스타일2}>네모상자</div>
            <div className="lg:chulsuBox">클때는 초록색</div>
            <div className="lg:text-green-900">클때는 초록색</div>
        </>
    );
};