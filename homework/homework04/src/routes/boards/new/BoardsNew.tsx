// import logo from './logo.svg';
// import '../../../App.css';
import '../../styles/BoardsNew.css';
import React, { useState } from 'react';
// For TSError in 129line 
import process from '@babel/core/package.json';


const BoardsNew = () => {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [isActive, setIsActive] = useState(false);

    const onChangeWriter = (event) => {
        if (event.target.value) {setWriterError("")}
        setWriter(event.target.value);

        if ( event.target.value && password && title && contents) return setIsActive(true)
        setIsActive(false)
    }

    const onChangePassword = (event) => {
        if (event.target.value) {setPasswordError("")}
        setPassword(event.target.value);

        if ( writer && event.target.value && title && contents) return setIsActive(true)
        setIsActive(false)
    }

    const onChangeTitle = (event) => {
        if (event.target.value) {setTitleError("")}
        setTitle(event.target.value);

        if ( writer && password && event.target.value && contents) return setIsActive(true)
        setIsActive(false)

    }

    const onChangeContents = (event) => {
        if (event.target.value) {setContentsError("")}
        setContents(event.target.value);

        if ( writer && password && title && event.target.value) return setIsActive(true)
        setIsActive(false)
    }

    const onClickEnroll = () => {

        if (!writer) {setWriterError("필수입력 사항 입니다.")}
        if (!password) {setPasswordError("필수입력 사항 입니다.")}
        if (!title) {setTitleError("필수입력 사항 입니다.")}
        if (!contents) {setContentsError("필수입력 사항 입니다.")}
        // else {
        //     console.log(writer, password, title, contents)
        //     alert("게시글 등록이 가능한 상태입니다!")
        // }

        if(writer && password && title && contents){
            alert("게시글 등록이 가능한 상태입니다!")
        }
    }
    const ActiveStyle = {
        backgroundColor: isActive === true ? "#2974E5" : "gray"
    }
    return (
        <div className="Wrapper">
            <div className="EnrollSubject">게시물 등록</div>

            <div className="WriterWrapper">
                <div className="InputLayout">
                    <div className="Label">작성자<span className="Star">*</span></div>
                    <input className="Writer" placeholder="작성자 명을 입력해 주세요." onChange={onChangeWriter} />
                    <div className={"ErrorMessage"}>{writerError}</div>
                </div>

                <div className="InputLayout">
                    <div className="Label">비밀번호<span className="Star">*</span></div>
                    <input className="Password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword} />
                    <div className={"ErrorMessage"}>{passwordError}</div>
                </div>
            </div>

            <div className="InputLayout">
                <div className="TitleWrapper">
                    <div className="Label">제목<span className="Star">*</span></div>
                    <input className="Title" placeholder="제목을 입력해 주세요." onChange={onChangeTitle} />
                    <div className={"ErrorMessage"}>{titleError}</div>
                </div>
            </div>

            <div className="InputLayout">
                <div className="Label">내용<span className="Star">*</span></div>
                <textarea className="Content" placeholder="내용을 입력해 주세요." onChange={onChangeContents} />
                <div className={"ErrorMessage"}>{contentsError}</div>
            </div>

            <div className="InputLayout">
                <div className="AddressWrapper">
                    <div className="Label">주소</div>
                    <div className="ZipcodeWrapper">
                        <input className="Zipcode" placeholder="01234" />
                        <button className="ZipcodeButton">우편번호 검색</button>
                    </div>
                    <input className="Address" placeholder="주소를 입력해 주시오세요." />
                    <input className="DetailAddress" placeholder="상세주소" />
                </div>
            </div>

            <div className="InputLayout">
                <div className="YoutubeWrapper">
                    <div className="Label">유튜브 링크</div>
                    <input className="Youtube" placeholder="링크를 입력해 주세요." />
                </div>
            </div>

            <div className="InputLayout">
                <div className="Label">사진 첨부</div>
                <div className="UploadWrapper">
                    <div className="Upload">
                            {/* 1. import // 2. public 폴더 내 이미지로 사용 3. 상대경로 사용 */}
                            {/* 2. public 방법 사용함! */}
                            {/* <img src={`${process.env.PUBLIC_URL}/Plus.png`} /> */}
                            <div className="UploadLabel">클릭해서 사진 업로드</div>
                    </div>

                    <div className="Upload">
                            {/* <img src={`${process.env.PUBLIC_URL}/Plus.png`} /> */}
                            <div className="UploadLabel">클릭해서 사진 업로드</div>
                    </div>

                    <div className="Upload">
                            {/* <img src={`${process.env.REACT_APP_PUBLIC_URL}/Plus.png`} alt="Plus" /> */}
                            <div className="UploadLabel">클릭해서 사진 업로드</div>
                    </div>
                </div>

                <div className="InputLayout">
                    <div className="FinishWrapper">
                        <button className="Cancel">취소</button>
                        <button className="Enroll" onClick={onClickEnroll} style={ActiveStyle} disabled={!isActive}>등록하기</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BoardsNew;
