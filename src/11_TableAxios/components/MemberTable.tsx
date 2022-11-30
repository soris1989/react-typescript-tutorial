import { useEffect } from "react";
import { useMemberCollection } from "../hooks/useMemberCollection";
import MemberEntity from "../model/members";

const MemberRow = ({ member }: { member: MemberEntity }) => {
    const { id, login, avatar_url } = member;
    return (
        <>
            <tr>
                <td>
                    <img src={avatar_url} style={{ maxWidth: "10rem" }} />
                </td>
                <td>
                    <span>{id}</span>
                </td>
                <td>
                    <span>{login}</span>
                </td>
            </tr>
        </>
    );
};

export const MemberTable = (props: any) => {
    const { memberCollection, loadMemberCollection } = useMemberCollection();

    useEffect(() => {
        loadMemberCollection();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {memberCollection.map((member) => (
                        <MemberRow key={member.id} member={member} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
