import React, { useState } from "react";
import Nav from "../components/Navbar/index";
import Title from "../utils/Title/Title";
import {
  CommonContainer,
  CommonContentsHome,
  CommonContentsRight,
  CommonContentsLeft,
  MainSlide,
  CommonTitleArea,
  CommonTitleTGroup,
  CommonTitleText,
} from "../styles/Layout/Layout";

import FavoriteImage from "../assets/images/board_like_bk_32.svg";
import SliderSingleMain from "../components/Slider/SliderCore/SliderSingleMain";
import TopPopularPicture from "../components/Slider/TopPopularPicture";
import slide1 from "../assets/images/main-slide-img01.png";
import slide2 from "../assets/images/main-slide-img02.png";
import slide3 from "../assets/images/main-slide-img03.png";
import HomeBoardSelect from "../components/Home/HomeBoard/HomeBoardSelect";
import HomeBoardSummary from "../components/Home/HomeBoard/HomeBoardSummary";
import HomeBoard from "../components/Home/HomeBoard";
import HomeChart from "../components/Home/HomeChart/HomeChart";

export default function Home() {
  const data = [slide1, slide2, slide3];
  const [selected, setSelected] = useState("threepowerpost");

  return (
    <>
      <Title name="Home" />
      <Nav />
      <CommonContainer>
        <MainSlide>
          <SliderSingleMain data={data} categories={"home"} />
        </MainSlide>
        <CommonContentsHome>
          {/* 홈화면 오른쪽 인기사진, 게시판 목록 */}
          <CommonContentsLeft>
            <CommonTitleArea>
              <CommonTitleTGroup>
                <img
                  src={FavoriteImage}
                  alt="favorite"
                  style={{ marginRight: "12px" }}
                />
                <CommonTitleText>이번주 인기사진</CommonTitleText>
              </CommonTitleTGroup>
            </CommonTitleArea>
            <TopPopularPicture />

            <HomeBoardSelect selected={selected} setSelected={setSelected} />
            <HomeBoardSummary selected={selected} />
            <HomeBoard selected={selected} />
          </CommonContentsLeft>

          {/* 홈화면 왼쪽 삼대력 Top10 목록 */}
          <CommonContentsRight>
            <HomeChart />
          </CommonContentsRight>
        </CommonContentsHome>
      </CommonContainer>
    </>
  );
}
