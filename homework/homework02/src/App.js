// import logo from './logo.svg';
import './App.css';
import './routes/index.css';
import React, { useState } from 'react';

const App = () => {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeWriter = (event) => {
        if (event.target.value) {setWriterError("")}
        setWriter(event.target.value);
    }

    const onChangePassword = (event) => {
        if (event.target.value) {setPasswordError("")}
        setPassword(event.target.value);
    }

    const onChangeTitle = (event) => {
        if (event.target.value) {setTitleError("")}
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        if (event.target.value) {setContentsError("")}
        setContents(event.target.value);
    }

    const onClickEnroll = () => {

        if (!writer) {setWriterError("작성자 명을 입력해 주세요.")}
        if (!password) {setPasswordError("비밀번호를 입력해 주세요.")}
        if (!title) {setTitleError("제목을 입력해 주세요.")}
        if (!contents) {setContentsError("내용을 입력해 주세요.")}
        // else {
        //     console.log(writer, password, title, contents)
        //     alert("게시글 등록이 가능한 상태입니다!")
        // }

        if(writer && password && title && contents){
            alert("게시글 등록이 가능한 상태입니다!")
        }
    }
    return (
        <div class="Wrapper">
            <div class="EnrollSubject">게시물 등록</div>

            <div class="WriterWrapper">
                <div class="InputLayout">
                    <div class="Label">작성자<span class="Star">*</span></div>
                    <input class="Writer" placeholder="작성자 명을 입력해 주세요." onChange={onChangeWriter} />
                    <div class={"ErrorMessage"}>{writerError}</div>
                </div>

                <div class="InputLayout">
                    <div class="Label">비밀번호<span class="Star">*</span></div>
                    <input class="Password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword} />
                    <div class={"ErrorMessage"}>{passwordError}</div>
                </div>
            </div>

            <div class="InputLayout">
                <div class="TitleWrapper">
                    <div class="Label">제목<span class="Star">*</span></div>
                    <input class="Title" placeholder="제목을 입력해 주세요." onChange={onChangeTitle} />
                    <div class={"ErrorMessage"}>{titleError}</div>
                </div>
            </div>

            <div class="InputLayout">
                <div class="Label">내용<span class="Star">*</span></div>
                <textarea class="Content" placeholder="내용을 입력해 주세요." onChange={onChangeContents} />
                <div class={"ErrorMessage"}>{contentsError}</div>
            </div>

            <div class="InputLayout">
                <div class="AddressWrapper">
                    <div class="Label">주소</div>
                    <div class="ZipcodeWrapper">
                        <input class="Zipcode" placeholder="01234" />
                        <button class="ZipcodeButton">우편번호 검색</button>
                    </div>
                    <input class="Address" placeholder="주소를 입력해 주시오세요." />
                    <input class="DetailAddress" placeholder="상세주소" />
                </div>
            </div>

            <div class="InputLayout">
                <div class="YoutubeWrapper">
                    <div class="Label">유튜브 링크</div>
                    <input class="Youtube" placeholder="링크를 입력해 주세요." />
                </div>
            </div>

            <div class="InputLayout">
                <div class="Label">사진 첨부</div>
                <div class="UploadWrapper">
                    <div class="Upload">
                            {/* 상대경로 사용 */}
                            {/* 다른 방법 사용할거면 1. import // 2. public 폴더 내 이미지로 사용 */}
                            <img class="Plus" src={require('./routes/assets/Plus.png')} />
                            <div class="UploadLabel">클릭해서 사진 업로드</div>
                    </div>

                    <div class="Upload">
                            {/* 상대경로 사용 */}
                            <img class="Plus" src={require('./routes/assets/Plus.png')} />
                            <div class="UploadLabel">클릭해서 사진 업로드</div>
                    </div>

                    <div class="Upload">
                            {/* 상대경로 사용 */}
                            <img class="Plus" src={require('./routes/assets/Plus.png')} />    
                            <div class="UploadLabel">클릭해서 사진 업로드</div>
                    </div>
                </div>

                <div class="InputLayout">
                    <div class="FinishWrapper">
                        <button class="Cancel">취소</button>
                        <button class="Enroll" onClick={onClickEnroll}>등록하기</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;
