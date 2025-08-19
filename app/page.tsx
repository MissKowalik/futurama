import ButtonLink from "../components/ButtonLink";

export default function Home() {
  return (
    <div className="flex gap-8">
      <ButtonLink href="./rest">Browse via REST API</ButtonLink>
      <ButtonLink href="./graphql">Browse via GraphQL</ButtonLink>
    </div>
  );
}
