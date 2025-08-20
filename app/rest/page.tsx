import getCharactersRest from "@/lib/data/rest";
import CharacterCard from "@/components/CharacterCard";

export default async function Rest() {
    const characters = await getCharactersRest();

    return (
        <>
            <h2 className="text-zinc-200 text-2xl m-4">Fetched with REST API</h2>

            {/* Character Card */}
            <div className="grid grid-cols-4 gap-4 mx-4">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </>
    );
}