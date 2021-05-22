type EnumLiteralsOf<T extends object> = T[keyof T]

export type TypeOfConnection = EnumLiteralsOf<typeof TypeOfConnection>
export const TypeOfConnection = Object.freeze({
    MsSql: 0 as 0,
    Postgre: 1 as 1
})
