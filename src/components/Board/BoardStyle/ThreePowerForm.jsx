import {
  BoardDiv,
  BoardVideoOne,
  BoardVideoDiv,
  BoardVideoTwo,
  BoardVideoThree,
  BoardTextDiv,
  BoardText,
  BoardDivBottom,
  SeparataDivLeft,
  BoardDivIcon,
  BoardDivWrite,
  SeparataSpan,
  SeparataDiv,
  SeparataItem,
} from "./BoardStyle";
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TiemIcon from "../../../assets/icons/free-icon-calendar-2838779.png";

export default function ThreePowerForm({
  id,
  title,
  createdDate,
  nickname,
  view,
  urls,
}) {
  const [nowday, setNowDay] = useState([]);
  function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    const dayList = [];
    for (let i = 0; i < 3; i++) {
      dayList.push(
        `${year}-${month}-${day - i < 10 ? "0" + (day - i) : day - i}`
      );
    }
    setNowDay(dayList);
  }
  useEffect(getToday, []);

  return (
    <BoardDiv>
      <ReseponseDiv>
        <BoardVideoOne autoplay>
          <source src={urls[0]} type="video/mp4" />
        </BoardVideoOne>
        <BoardVideoDiv>
          <BoardVideoTwo autoplay>
            <source src={urls[1]} type="video/mp4" />
          </BoardVideoTwo>
          <BoardVideoThree autoplay>
            <source src={urls[2]} type="video/mp4" />
          </BoardVideoThree>
        </BoardVideoDiv>
      </ReseponseDiv>
      <ReseponseDiv>
        <BoardTextDiv>
          <BoardText>
            {title.length > 15 ? `${title.slice(0, 15)}...` : title}
          </BoardText>
          {nowday.includes(`${createdDate.slice(0, 10)}`) && (
            <img src={NewIcon} style={{ margin: "0px 5px" }} alt="newicon" />
          )}
        </BoardTextDiv>
        <BoardDivBottom>
          <SeparataDivLeft>
            <BoardDivIcon />
            <BoardDivWrite>
              {nickname.length > 5 ? `${nickname.slice(0, 5)}...` : nickname}
            </BoardDivWrite>
          </SeparataDivLeft>
          <SeparataDiv>
            <SeparataItem>
              <img src={EyeIcon} alt="eyeicon" />
              <SeparataSpan>{view}</SeparataSpan>
            </SeparataItem>
            <SeparataItem>
              <img
                src={TiemIcon}
                alt="tiemicon"
                style={{ widh: "18px", height: "18px" }}
              />
              <SeparataSpan>{createdDate.slice(0, 10)}</SeparataSpan>
            </SeparataItem>
          </SeparataDiv>
        </BoardDivBottom>
      </ReseponseDiv>
    </BoardDiv>
  );
}

const ReseponseDiv = styled.div`
  @media screen and (max-width: 600px) {
    width: 45%;
    margin: 0 auto;
  }
`;
