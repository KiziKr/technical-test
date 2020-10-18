export interface User {
    id: string;
    email: string;
    userSheet?: UserSheet;
    createdAt: string;
    updatedAt: string;
}

export interface UserSheet {
    firstName: string;
    lastName: string;
    description: string;
    phone: number;
}