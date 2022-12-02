import { LoginEntity } from "../model/login";

export const login = async (loginInfo: LoginEntity) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            if (loginInfo.login === "admin" && loginInfo.password === "test") {
                return resolve(true);
            }
            return resolve(false);
        }, 500);
    });
};
