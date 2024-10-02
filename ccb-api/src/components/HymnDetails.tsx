import { Hymn } from "../models/Hymn"

export type HymnDetails = {
    hymn: Hymn
}

export function HymnDetails({ hymn }){
    return <>
        <div>
            <h2>Título: {hymn.title}</h2>
            <h3>Author: {hymn.songwriter.name !=  "" ? hymn.songwriter.name : "Não encontrado"}</h3>
            <p>{hymn.lyrics}</p>
        </div>
    </>
}