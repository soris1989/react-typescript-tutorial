import { useEffect } from "react";
import { useMemberCollection } from "../hooks/useMemberCollection";

export const MemberTable = (props: any) => {
    const { memberCollection, loadMemberCollection } = useMemberCollection();

    useEffect(() => {
        loadMemberCollection();
    }, []);

    return (
        <>
            {memberCollection.map((member) => (
                <h1 key={member.id}>{member.login}</h1>
            ))}
        </>
    );
};
