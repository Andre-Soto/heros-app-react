import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublisers = ['DC Comics', 'Marvel Comics'];
    if( !validPublisers.includes(publisher)){
        throw new Error(`${publisher} no se encuentra dentro de la lista permitida.`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}