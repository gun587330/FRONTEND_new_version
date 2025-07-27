// src/commons/settings/06-02-apollo-setting.tsx
/* 
- `ApolloSetting` 컴포넌트는 GraphQL API와 상호작용할 수 있도록 설정된 Apollo Client를 React 애플리케이션의 루트에 제공하는 역할을 합니다.
- `ApolloProvider`를 사용하여 Apollo Client 인스턴스를 자식 컴포넌트에 주입합니다.
- TypeScript를 사용하여 `props` 타입을 명시적으로 정의하고 있습니다.
- `InMemoryCache`를 사용하여 쿼리 결과를 메모리에 캐싱하여 성능을 최적화합니다.
 */

"use client"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSetting {
    children: React.ReactNode
}
export default function ApolloSetting(props: IApolloSetting) {
    const client = new ApolloClient({
        uri: "http://main-example.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache()
    })    

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}