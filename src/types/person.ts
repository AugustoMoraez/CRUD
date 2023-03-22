
 export type person = {
    name: string,
    id: string
 }
export type reducerAction = {
    type: string,
    payload: {
        name?: string | null,
        id?: string| null,
        index?:number| null
    }
}
