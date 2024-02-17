export interface userInfo {
    id: number;
    infoName: string;
    infoValue: number | null;
}

export interface UserInfoProps {
    userInfo: userInfo[];
}
