export interface BodyRequestCreateUser{
    email: string,
    password: string
}

export interface RequestLoginUser{
    email:string,
    password:string
}
export interface ResponseCreateUser{
    message: string,
}

export interface ResponseLoginUser{
    message: string,
    email:string,
}

export interface Post {
    id:                       number;
    postByUser:               number;
    title:                    string;
    body:                     string;
    creationDate:             Date;
    estimatedPublicationDate: Date;
    status:                   Status;
    approvalPercentage:       number;
    corrections:              Corrections | null;
    platform:                 Platform;
    postUrl:                  string;
    multimediaUrl:            null | string;
    deletedAt:                null;
}

export enum Corrections {
    Holi = "holi",
    Ninguna = "Ninguna",
    PalabraProhibida = "palabra prohibida",
}

export enum Platform {
    Facebook = "Facebook",
    Instagram = "Instagram",
    X = "X",
}

export enum Status {
    Pending = "pending",
}

export interface PostResponse {
    message: string,
    data: Post[]
}
