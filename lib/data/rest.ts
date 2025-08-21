import { Character } from "../interfaces/Character";

export default async function getCharactersRest() {
    try {
        const response = await fetch("https://futuramaapi.com/api/characters");
        const data = await response.json();
        const characters: Character[] = data.items;
        return characters;
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}