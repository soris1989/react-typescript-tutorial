export interface LoginProps {
    loginInfo: LoginEntity;
    onLogin: (loginInfo: LoginEntity) => void;
}

export interface LoginEntity {
    login: string;
    password: string;
}

export const createLogin = (login: string, password: string): LoginEntity => ({
    login,
    password,
});

export const createEmptyLogin = (): LoginEntity => ({
    login: "",
    password: "",
});
