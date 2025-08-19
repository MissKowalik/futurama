import Image from "next/image";

interface Character {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    image?: string;
}

export default async function Rest() {
    const response = await fetch("https://futuramaapi.com/api/characters");
    const data = await response.json();
    const characters: Character[] = data.items;

    return (
        <>
        <h2 className="text-zinc-200 text-2xl my-4">Fetched with REST API</h2>
        <div className="grid grid-cols-4 gap-4">
            {characters.map((character) => (
            <div key={character.id} className="bg-zinc-200 border rounded-2xl grid grid-cols-subgrid gap-4 overflow-hidden">
                {character.image ? (
                    <Image
                        src={character.image}
                        alt={`picture of ${character.name}`}
                        width={300}
                        height={300}
                        className="h-64 object-cover w-full"
                    />
                    ) : (
                    <div className="flex items-center justify-center h-64 bg-zinc-400 text-white">No image available</div>
                    )}
                <div className="m-2">
                    <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
                    <div className="flex gap-2">
                        <p className="border rounded-full px-1.5 py-0.5">{character.species}</p>
                        <p className="border rounded-full px-1.5 py-0.5">{character.gender}</p>
                        <p className="border rounded-full px-1.5 py-0.5">{character.status}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </>
    );
}