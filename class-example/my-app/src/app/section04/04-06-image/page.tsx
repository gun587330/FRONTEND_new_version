"use client"

import Image from 'next/image'; // next 내장 이미지
import styles from './styles.module.css';

/* Component */
export default function ImagePage() {
    return(
        <>
            {/* 고전 이미지 사용 방식 */}
            <img 
            src='/images/04-01-dog.jpg' 
            alt="강아지이미지" 
            className={styles.이미지를보여주자} 
            />

            {/* next.js에서 제공하는 이미지 사용 방식 */}
            <Image 
            src='/images/04-01-dog.jpg' 
            alt="강아지이미지" 
            className={styles.이미지를보여주자} 
            width={0}
            height={0}
            sizes="100vw" // ㅌsizes도 지정해줘야 함 아니면 블러처리나네..
            />
        </>

    )
}