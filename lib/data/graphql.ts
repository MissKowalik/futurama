import { Character } from "../interfaces/Character";

const endpoint = "https://futuramaapi.com/graphql"

const query = `
{
  characters {
    edges {
      id
      name
      gender
      status
      species
      image
    }
  }
}
`;

export async function getCharactersGraphQL() {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });

    const result = await response.json();
    const characters: Character[] = result.data.characters.edges;
    return characters;
    
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}