import { fetchAllEnterprises} from "./lib/api";
import CardOffer from "./ui/cards/cardOffer";

export default async function Home() {
  //obtener todas las empresas
  const enterpriseData = await fetchAllEnterprises();
  return (
    <>
      <main className="container">
        <h3>Ofertas de pasajes disponibles por tiempo limitado!</h3>
        <ul>
          {enterpriseData.map(el => {
            return el.pasajes.map( e => {
              return <li><CardOffer data={e}/></li>
            })
          })
        }
        <CardOffer data={enterpriseData}/>
        </ul>
      </main>
    </>
  );
}
