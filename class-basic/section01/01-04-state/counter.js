const 카운터 = () => {
    // Fullname
    // window.React.useState()
    const [카운트변수, 카운트바꿔주는함수] = React.useState(0)

    const 카운트올리기 = () => {
        카운트바꿔주는함수(카운트변수 + 1)
    }

    const 카운트내리기 = () => {
        카운트바꿔주는함수(카운트변수 - 1)
    }

    // 함수의 리턴값은 1개만 가능 => 하나로 묶어서 리턴해야 함.
    return (
        // <> </> : React.Fragment(프래그먼트)
        <>
            <div>{카운트변수}</div>
            <button onClick={카운트올리기}>카운트 올리기!!</button>
            <button onClick={카운트내리기}>카운트 내리기!!</button>
        </>
    )
}