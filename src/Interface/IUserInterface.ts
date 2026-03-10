interface IUserRequest{
    id?:string,
    name?: string;
    email: string;
    admin?: boolean; //? indica que não é obrigatorio 
    password: string;
}

export{IUserRequest}