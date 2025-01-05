
import { GET } from "./api/route";
import CardsOfferts from "./ui/cards/cardsOfferts";

export default async function Home() {
  //obtener todas las empresas
  const enterpriseData = await GET();

  if (enterpriseData.length == 0) {
    return <h3>No Hay Datos</h3>
  }

  return (
    <main>
      <CardsOfferts data={enterpriseData} />
    </main>
  );
}
