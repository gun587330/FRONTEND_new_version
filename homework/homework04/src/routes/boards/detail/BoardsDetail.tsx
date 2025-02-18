import '../../styles/BoardsDetail.css';
// import logo from './logo.svg';
// import '../../../App.css';
import React from 'react';

const BoardsDetail = () => {
    return (
        <div className={'Canvas'}>
            <div className={'Wrapper'}>
                <div className={'InputWrapper'}>
                    <div className={'TitleInDetail'}>
                        살어리 살아러랏다 쳥산(靑山)애 살어리랏다멀위랑 
                        ㄷ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라
                    </div>
                </div>

                <div className={'InputWrapper'}>
                    <div className={'WriterInfo'}>
                        <div className={'Information'}>
                            <img src={`${process.env.PUBLIC_URL}/InfoProfile.png`} />
                            <span className={'WriterLabel'}>홍길동</span>
                        </div>
                        <div className={'Date'}>2024.11.11</div>
                    </div>
                    <div className={'EtcWrapper'}>
                        <img src={`${process.env.PUBLIC_URL}/ShareIcon.png`} />
                        <img src={`${process.env.PUBLIC_URL}/MapIcon.png`} />
                    </div>
                </div>

                <div className={'InputWrapper'}>
                    <div className={'ContentsInDetail'}>
                        <img src={`${process.env.PUBLIC_URL}/ContentsPic.png`} />
                    </div>
                </div>

                <div className={'InputWrapper'}>
                    <div className={'ContentsInDetail'}>
                        <span>
                            살겠노라 살겠노라. 청산에 살겠노라. <br />
                            머루랑 다래를 먹고 청산에 살겠노라. <br />
                            얄리얄리 얄랑셩 얄라리 얄라 <br />
                            <br /><br />
                            우는구나 우는구나 새야. 자고 일어나 우는구나 새야. <br />
                            너보다 시름 많은 나도 자고 일어나 우노라. <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                            <br /><br />
                            갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐 <br />
                            이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐. <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                            <br /><br />
                            이럭저럭 하여 낮일랑 지내 왔건만 <br />
                            올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가. <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                            <br /><br />
                            어디다 던지는 돌인가 누구를 맞히려던 돌인가. <br />
                            미워할 이도 사랑할 이도 없이 맞아서 우노라. <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                            <br /><br />
                            살겠노라 살겠노라. 바다에 살겠노라. <br />
                            나문재, 굴, 조개를 먹고 바다에 살겠노라. <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                            <br /><br />
                            가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라. <br />
                            사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라. <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                            <br /><br />
                            가다 보니 배불룩한 술독에 독한 술을 빚는구나. <br />
                            조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1] <br />
                            얄리얄리 얄라셩 얄라리 얄라 <br />
                        </span>
                    </div>
                </div>

                <div className={'InputWrapper'}>
                    <img src={`${process.env.PUBLIC_URL}/Video.png`} />
                </div>

                <div className={'InputWrapper'}>
                    <div className={'LikeWrapper'}>
                        {/* 아니 애초에 사진 파일을 크기가 다른 걸 쳐 주고 어떻게 정렬 때리냐;; */}
                        <div className={'DislikeBox'}>
                            <img src={`${process.env.PUBLIC_URL}/DislikeIcon.png`} className={'DislikeIcon'} />
                            <span className={'DislikeCount'}>24</span>
                        </div>

                        <div className={'LikeBox'}>
                            <img src={`${process.env.PUBLIC_URL}/LikeIcon.png`} className={'LikeIcon'} />
                            <span className={'LikeCount'}>12</span>
                        </div>
                    </div>
                </div>

                <div className={'MenuWrapper'}>
                    <button className={'MenuButton'}>
                        <img src={`${process.env.PUBLIC_URL}/ListIcon.png`} className={'ButtonIcon'} />
                        <span>목록으로</span>
                    </button>
                    <button className={'MenuButton'}>
                        <img src={`${process.env.PUBLIC_URL}/EditIcon.png`} className={'ButtonIcon'} />
                        <span>수정하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BoardsDetail;
