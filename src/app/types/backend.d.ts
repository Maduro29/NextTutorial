interface IAuthor {
    id: number,
    name: string,
    avatar: string,
}

interface ISong {
    id: number,
    idCategory: number,
    artUrl: string,
    nameAuthor: string,
    pathUrl: string,
    title: string
}