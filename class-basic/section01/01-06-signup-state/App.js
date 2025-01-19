const App = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    // event handler 함수 (onChange형태 or handleChange형태 로 주로 함수 이름을 씀)
    const onChangeEmail = (event) => {
        // event.target = 작동된 태그(input)
        // event.target.value = 작동된 태그(input)에 입력된 값
        console.log(event.target);
        console.log(event.target.value);
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onClickSignup = () => {
        console.log(email); // 진짜 포장이 잘 됐는지 확인용
        console.log(password); // 진짜 포장이 잘 됐는지 확인용

        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다! @가 없음")
            // HTML 고전 방법
            // document.getElementById("이메일에러표시하는곳").innerText = "이메일이 올바르지 않습니다! @가 없음"

            // state를 사용한 방법
            setEmailError("이메일이 올바르지 않습니다! @가 없음")
        }
        else{
            alert("회원가입을 축하합니다.")}
    }

    return (
        <div className="철수의App">
            {/* HTML은 onInput을 사용하지만, React에서는 onChange를 사용함. */}
            {/* event를 다루는 함수 : 이벤트 핸들러 함수 (onChangeEmail, onChangePassword) */}
            이메일 : <input type="text" onChange={onChangeEmail}/><br/>
            {/* HTML 고전 방법 */}
            {/* <div id="이메일에러표시하는곳"></div> */}

            {/* state를 사용한 방법 */}
            <div>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePassword} /><br/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}