import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import { ProfileContainer } from "./ProfileLayout";
import ContentUserModify from "./ContentUserModify";
import ContentUserDropOut from "./ContentUserDropOut";
import axios from "axios";
import { useEffect } from "react";
import BoardFetchItems from "../../components/Board/View/BoardFetchItems";
import { currentUserState } from "../../api/useUserData";
import { useRecoilValue } from "recoil";

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default function ContentBody() {
    const [selected, setSelected] = useState("profile");
    const [myInfo, setMyInfo] = useState(null);
    const userId = useRecoilValue(currentUserState);
    console.log("마이페이지 회원데이터 읽어는 올수있음", userId);

    // useEffect(() => {
    //     axios.get(`/api/user`).then((res) => {
    //         setMyInfo(res.data.data);
    //     });
    // }, []);

    //console.log(myInfo);

    return (
        <ProfileContainer>
            <ProfileNav
                onChange={(name) => {
                    setSelected(name);
                }}
                typeName={selected}
            />
            <Group selected={selected}>
                <GroupItem name="profile">
                    {!!myInfo && (
                        <div>
                            <div>{myInfo.loginId}</div>
                            <div>{myInfo.nickName}</div>
                            <div>{myInfo.bigThreePower.bench}</div>
                            <div>{myInfo.bigThreePower.dead}</div>
                            <div>{myInfo.bigThreePower.squat}</div>
                            <div>{myInfo.bigThreePower.sum}</div>
                        </div>
                    )}

                    <>{!!myInfo && <BoardFetchItems category={"user"} />}</>
                </GroupItem>
                <GroupItem name="profileModify">
                    {!!myInfo && (
                        <ContentUserModify
                            loginId={myInfo.loginId}
                        ></ContentUserModify>
                    )}
                </GroupItem>
                <GroupItem name="userDropOut">
                    {!!myInfo && (
                        <ContentUserDropOut
                            loginId={myInfo.loginId}
                        ></ContentUserDropOut>
                    )}
                </GroupItem>
            </Group>
        </ProfileContainer>
    );
}
