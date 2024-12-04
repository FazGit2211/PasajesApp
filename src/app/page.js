import { fetchEmpresas } from "./lib/api";
import CardOferts from "./ui/cards/cardOferts";

export default async function Home() {
  const empresasData = await fetchEmpresas();
  console.log(empresasData);
  return (
    <>
    <main>
      <h3>Ofertas de pasajes disponibles por tiempo limitado!</h3>
      <ul>
        <li><CardOferts/></li>
      </ul>
    </main>
    </>
  );
}
