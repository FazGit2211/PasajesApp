import { fetchEmpresas } from "./lib/api";
import CardOferts from "./ui/cards/cardOferts";

export default async function Home() {
  //obtener del servidor los datos
  const empresasData = await fetchEmpresas();
  return (
    <>
      <main>
        <h3>Ofertas de pasajes disponibles por tiempo limitado!</h3>
        <ul>
          {empresasData.map(el => {
            console.log("Pasajes encontrados"+el.pasajes);
            return el.pasajes.map( e => {
              return <li><CardOferts data={e}/></li>
            })
          })
        }
        </ul>
      </main>
    </>
  );
}
