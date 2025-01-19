const 게시글등록페이지 = () => {
    return (
        <div class="Wrapper">
            <div class="EnrollSubject">게시물 등록</div>

            <div class="WriterWrapper">
                <div class="InputLayout">
                    <div class="Label">작성자<span class="Star">*</span></div>
                    <input class="Writer" placeholder="작성자 명을 입력해 주세요." />
                </div>

                <div class="InputLayout">
                    <div class="Label">비밀번호<span class="Star">*</span></div>
                    <input class="Password" placeholder="비밀번호를 입력해 주세요." />
                </div>
            </div>

            <div class="InputLayout">
                <div class="TitleWrapper">
                    <div class="Label">제목<span class="Star">*</span></div>
                    <input class="Title" placeholder="제목을 입력해 주세요." />
                </div>
            </div>

            <div class="InputLayout">
                <div class="Label">내용<span class="Star">*</span></div>
                <textarea class="Content" placeholder="내용을 입력해 주세요." />
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
                        <img class="Plus" src="./assets/plus.png"/>
                        <div class="UploadLabel">클릭해서 사진 업로드</div>
                    </div>

                    <div class="Upload">
                        <img class="Plus" src="./assets/plus.png"/>
                        <div class="UploadLabel">클릭해서 사진 업로드</div>
                    </div>

                    <div class="Upload">
                        <img class="Plus" src="./assets/plus.png"/>
                        <div class="UploadLabel">클릭해서 사진 업로드</div>
                    </div>
                </div>

                <div class="InputLayout">
                    <div class="FinishWrapper">
                        <button class="Cancel">취소</button>
                        <button class="Enroll">등록하기</button>
                    </div>
                </div>

            </div>
        </div>
    );
  };