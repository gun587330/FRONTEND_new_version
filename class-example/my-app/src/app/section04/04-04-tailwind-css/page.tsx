"use client";

import styles from "./styles.module.css";

export default function CssPage(){
    //빈 태그로 묶어주는 걸 fragment라고 한다!!
    return (
        <>
            <button className={styles.버튼스타일}>버튼</button>
            <div className={styles.네모상자스타일}>네모상자</div>
            {/*tailwind의 또 다른 사용법*/}
            <div className={"bg-green-200"}>버튼2</div>
        </>
    );
};