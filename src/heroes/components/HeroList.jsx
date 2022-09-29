import { getHeroesByPublisher } from "../helpers"
import { HerosCard } from "./";


export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher);
    console.log(heroes)
    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map( hero => (
                        <HerosCard
                        key={hero.id}
                        {...hero}
                        />
                     ) )
                }
            </div>
        </>
    )
}
