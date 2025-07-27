"use client" // react18버전을 사용하고 있지만, react17버전과 동일하게 해줌 

export default function RestGetPage(){
    const onClickAsync = () =>{
        const result = fetch("https://jsonplaceholder.typicode.com/");

        console.log(result); // Promise
    }

    // 화살표 함수일 때 async 위치 기억! 문법임
    const onClickSync = async() =>{
        const result = await fetch("https://jsonplaceholder.typicode.com/");
        const data = await result.json();

        console.log(result); // 제대로 된 결과
        console.log(data.title);
    }


    return (
        <>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
        </>
    )
}