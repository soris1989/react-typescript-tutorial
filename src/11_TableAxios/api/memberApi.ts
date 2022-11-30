import axios from "axios";
import MemberEntity from "../model/members";

const gitHubURL = "https://api.github.com";
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getMembersCollection = async (): Promise<MemberEntity[]> => {
    // return new Promise<MemberEntity[]>((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([
    //             {
    //                 id: 1457912,
    //                 login: "brauliodiez",
    //                 avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3",
    //             },
    //             {
    //                 id: 4374977,
    //                 login: "Nasdan",
    //                 avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3",
    //             },
    //         ]);
    //     }, 500);
    // });
    try {
        const { data } = await axios.get<MemberEntity[]>(gitHubMembersUrl);
        return data;
    } catch (error) {
        throw error;
    }
};
