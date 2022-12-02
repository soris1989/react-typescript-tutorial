export interface LoginProps {
    login: string;
    password: string;
    onLogin: (name: string, password: string) => void;
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
