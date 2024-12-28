import { fetchAllEnterprises } from "./lib/api";
import CardsOfferts from "./ui/cards/cardsOfferts";

export default async function Home() {
  //obtener todas las empresas
  const enterpriseData = await fetchAllEnterprises();
  return (
    <>
      <main className="container">
        <CardsOfferts data={enterpriseData}/>
      </main>
    </>
  );
}
