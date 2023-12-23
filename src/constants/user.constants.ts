// export enum USER_ROLE{
//     user="user",
//     admin="admin"
// }
// // const myrole: USER_ROLE='admin'
// const myrole: USER_ROLE=USER_ROLE.admin
// console.log(myrole)
// typescript developer remainder us cannot use enum

// better solution is object

export const USER_ROLE={
    user:'user',
    admin:'admin'
}
export const ACCOUNT_STATUS={
    active:'active',
    inactive:'inactive'
} as const;

// const myrole: keyof typeof USER_ROLE= 'admin'
// console.log(myrole)