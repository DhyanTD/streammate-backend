export class CreateUserDto {
    userName!: string;
    password!: string;
    email!: string;
    name?: string;
    avatar?: string;
    bio?: string;
}

export class LoginUserDto {
    username!: string;
    password!: string;
}

