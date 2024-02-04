import {Character} from "./Character";

const Characters = () => {
    const characters = [
        {
            id: 1,
            name: "Beth's Mytholog",
            status: "Dead",
            species: "Mythological Creature",
            gender: "Female",
            image: "https:rickandmortyapi.com/api/character/avatar/40.jpeg"
        },
        {
            id:2,
            name: "Conroy",
            status: "Dead",
            species: "Robot",
            gender: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/71.jpeg"
        },
        {
            id:3,
            name: "Snake Reporter",
            status: "Alive",
            species: "Animal",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/589.jpeg"
        },
        {
            id:4,
            name: "Franklin D. Roosevelt",
            status: "Dead",
            species: "Humanoid",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/756.jpeg"
        },
        {
            id:5,
            name: "Giant Assassin Hidden in the Statue of Liberty",
            status: "Alive",
            species: "Robot",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/758.jpeg"
        },
        {
            id:6,
            name: "Alien Crow",
            status: "Dead",
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/792.jpeg"
        }


    ]
    return (
        <div>
            {characters.map(character=><Character key = {character.id} character={character}/>)}
        </div>
    );
};

export {Characters};