
import { GET } from "./api/route";
import CardsOfferts from "./ui/cards/cardsOfferts";

export default async function Home() {
  //obtener todas las empresas
  const enterpriseData = await GET();
  return (
    <>
      <main className="vh-100">
        <CardsOfferts data={enterpriseData} />
      </main>
    </>
  );
}
