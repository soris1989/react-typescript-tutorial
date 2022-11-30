import { useState } from "react";
import { getMembersCollection } from "../api/memberApi";
import MemberEntity from "../model/members";

export const useMemberCollection = () => {
    const [memberCollection, setMemberCollection] = useState<MemberEntity[]>([]);

    const loadMemberCollection = async () => {
        const results = await getMembersCollection();
        setMemberCollection(results);
    };

    return { memberCollection, loadMemberCollection };
};
