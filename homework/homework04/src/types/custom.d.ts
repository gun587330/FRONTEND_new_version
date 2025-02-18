// .svg 파일을 ts에서 지원하지 않아 발생하는 에러를 해결하기 위한 파일
// 근데 결국 해결 못해서 그냥 불필요한 import코드를 없애버림

declare module '*.svg' {
    const content: any;
    export default content;
  }