import type { Metadata } from "next"; // Metadata
import { Geist, Geist_Mono } from "next/font/google"; // google font라는 녀석이 next에서 제공되고 있음
import "./globals.css";
import ApolloSetting from "@/settings/06-02-apollo-setting";

/* 
[04-05-fonts 내용]
기존에 CSS-module의 방식처럼 '사용자지정이름.variable' 형식으로 className에 넣는다!
*/
const 철수의폰트 = Geist({
  variable: "--철수의폰트변수",
  subsets: ["latin"],
});

const 글로벌폰트 = Geist_Mono({
  variable: "--글로벌폰트변수",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "철수의 홈페이지",
  description: "반갑습니다. 철수의 세계에 오신 것을 환영합니다.",
};

// props에 밑줄은 ts 작성하지 않아서 나오는 것. 일단 무시
export default function RootLayout(props) {
  return (
    <html lang="en">
      {/*문자열과 변수를 함께 쓰고 싶을 떄, 빽틱(₩)으로 감싼 후, 변수는 $로! 이 경우 두 개 폰트를 함꼐 넣기 위해 빽틱 사용!*/}
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}> 
        <div>======여기는 레이아웃 입니다=====</div>
        {/*ApolloSettings의 역할 : props.children을 통해 접속하는 모든 페이지에서 graphql 기능이 작동하게 해줘!!*/}
        <ApolloSetting>
            {props.children}
        </ApolloSetting>
        <div>======여기는 레이아웃 입니다=====</div>
      </body>
    </html>
  );
}

/* 
    [ Next 실행 순서 ]
    1.  주소창에 주소 입력
        => http://localhost3000/

    2.  입력된 주소의 폴더안의 page.tsx 찾기
        => app/page.tsx
        (ex. 주소: /mypage는? => app/mypage/page.tsx 찾기)
        해당 구조는 next.js 프레임워크는 이미 react Route 기능이 내장되어 있기 떄문에 가능!

    3. 해당 페이지컴포넌트 통째로 props에 넣어서 실행하기
    <RootLayout children={해당페이지 컴포넌트} />
*/