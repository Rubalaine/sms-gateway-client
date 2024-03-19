export interface IUser{
    id: number;
    firstName: string;
    lastName?: string;
    username: string;
    role: string;
    created_at: string;
    updated_at: string;
    token: string;
}