import styled from "styled-components";

/*네비게이션*/
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 84px;
  background: #222222;
`;

/*네비게이션 아래 부분 콘텐츠 영역*/
export const CommonContainer = styled.div`
  width: 100%;
  position: relative;
`;

/*홈화면 2단 나누기*/
export const CommonContentsHome = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

/*홈화면 2단(왼쪽, 오른쪽 영역)*/
/* 홈화면 오른쪽 인기사진, 게시판 목록 */
export const CommonContentsLeft = styled.div`
  box-sizing: border-box;
  order: 1;
  @media screen and (max-width: 1440px) {
    order: 2;
  }
  @media screen and (max-width: 600px) {
    order: 2;
  }
`;

/* 홈화면 왼쪽 삼대력 Top10 목록 */
export const CommonContentsRight = styled.div`
  box-sizing: border-box;
  order: 2;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    order: 1;
  }
  @media screen and (max-width: 600px) {
    order: 1;
  }
`;

/*홈화면 메인 상단 슬라이드*/
export const MainSlide = styled.div`
  box-sizing: border-box;
  margin-top: 70px;
  width: 100%;
  height: 450px;
  background: #222222;
`;

/*메인화면 공통*/
/*홈화면, 카테고리 컨텐츠 타이틀*/
export const CommonTitleArea = styled.div`
  /* max-width: 1100px; */
  margin: 30px auto;
`;

export const CommonTitleTGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CommonTitleText = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  white-space: nowrap;
  font-family: "GangwonEduPower";
`;

/*홈화면 개별 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaHome = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1039px;
  margin: 0 auto;
`;

/*(홈화면 제외)각 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaSpace = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1396px;
  margin: 0 auto;
  margin-top: 100px;
  @media screen and (max-width: 1440px) {
    width: 1039px; /*아이템 4개*/
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1024px) {
    width: 682px; /*아이템 3개*/
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
  }
`;

/*(홈화면 제외) 게시글 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaInner = styled.div`
  box-sizing: border-box;
  margin: 32px 0px;
  display: flex;
  flex-wrap: wrap;
`;
