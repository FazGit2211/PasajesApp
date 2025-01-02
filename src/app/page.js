
import { GET } from "./api/route";
import CardsOfferts from "./ui/cards/cardsOfferts";

export default async function Home() {
  //obtener todas las empresas
  const enterpriseData = await GET();
  return (
    <>
      <main className="container">
        <CardsOfferts data={enterpriseData}/>
      </main>
    </>
  );
}
