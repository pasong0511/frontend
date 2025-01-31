import React from "react";
import styled from "styled-components";

function selectorNav(typeName, navSelect) {
  switch (typeName) {
    case "profile":
      return (navSelect.isProfile = true);
    default:
      return (navSelect.isModify = true);
  }
}

export function SelectGroup({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.name)}</>;
}

export function SlectItem({ children }) {
  return <>{children}</>;
}

export function ProfileSelector({ onChange, typeName = "profile" }) {
  const navSelect = {
    isProfile: false,
  };

  selectorNav(typeName, navSelect);

  return (
    <ProfileDiv>
      <ProfileItem isActive={navSelect.isProfile}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("profile");
          }}
        >
          나의 정보
        </a>
      </ProfileItem>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 92px;
  padding-bottom: 20px;
`;

const ProfileItem = styled.div`
  cursor: pointer;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #0066ff;
  color: ${(props) =>
    props.isActive ? "#0066FF" : props.theme.colorFontGrey100};
  a {
    display: block;
  }
`;
