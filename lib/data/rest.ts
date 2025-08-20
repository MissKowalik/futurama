import { Character } from "../interfaces/Character";

export default async function getCharactersRest() {
    const response = await fetch("https://futuramaapi.com/api/characters");
    const data = await response.json();
    const characters: Character[] = data.items;
    return characters;
}