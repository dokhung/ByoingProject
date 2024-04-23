import styled from "styled-components";
import {MainHeader} from "./HeaderComponents/MainHeader";
import {NavigationBar} from "./Navigation/NavigationBar";

export const Main = () => {
    const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

    const HeaderContainer = styled.div`
  background: darkgray;
`;

    const MainContent = styled.div`
  flex: 1;
  display: flex;
`;

    const SideBar = styled.div`
  background: lightgray;
  width: 175px;
`;

    const Content = styled.div`
  flex: 1;
`;
    const ListFont = styled.div`
    color:red;
        font-weight: bold;
        font-size: 24px;
    `;
    return(
        <PageContainer>
            <HeaderContainer>
                <MainHeader />
            </HeaderContainer>
            <MainContent>
                <SideBar>
                    <NavigationBar />
                </SideBar>
                <Content>
                    <ListFont>本日の予約はございません。</ListFont>
                    <ListFont>まだ、オープンしていません。</ListFont>
                </Content>
            </MainContent>
        </PageContainer>
    )
}