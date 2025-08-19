import ButtonLink from "../components/ButtonLink";

export default function Home() {
  return (
    <div className="relative w-screen h-[calc(100vh-74px)] p-8 flex items-center justify-center">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://m.media-amazon.com/images/S/pv-target-images/14e2a322e46f3770f21a96d857901a8120a7f7de54169202dee5acdfdc6c4d4d._SX1080_FMjpg_.jpg')",
          opacity: 0.4, // adjust opacity here
          zIndex: 0,
        }}
      />

      {/* Content on top */}
      <div className="relative flex gap-8 z-10">
        <ButtonLink href="./rest">Browse via REST API</ButtonLink>
        <ButtonLink href="./graphql">Browse via GraphQL</ButtonLink>
      </div>
    </div>
  );
}
