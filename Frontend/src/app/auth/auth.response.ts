export interface AuthResponse {
    client: {
        id: number;
        nameClient: string;
        usernameClient: string;
        emailClient: string;
        rolUserClient:string;
    },
    access_token: string;
}