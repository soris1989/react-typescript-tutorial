import axios from "axios";
import MemberEntity from "../model/members";

const gitHubURL = "https://api.github.com";
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getMembersCollection = async (): Promise<MemberEntity[]> => {
    try {
        const { data } = await axios.get<MemberEntity[]>(gitHubMembersUrl);
        return data;
    } catch (error) {
        throw error;
    }
};
