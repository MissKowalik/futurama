import CharacterCard from "@/components/CharacterCard";
import { getCharactersGraphQL } from "@/lib/data/graphql";

export default async function GraphQL() {
    const characters = await getCharactersGraphQL();

    return (
        <>
            <h2 className="text-zinc-200 text-2xl m-4">Fetched with GraphQL</h2>

            {/* Character Card */}
            <div className="grid grid-cols-4 gap-4 mx-4">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </>
    );
}