import CardOferts from "./ui/cards/cardOferts";

export default function Home() {
  return (
    <>
    <div className="div-home">
      <h3>Ofertas de pasajes disponibles por tiempo limitado!</h3>
      <ul>
        <li><CardOferts/></li>
      </ul>
    </div>
    </>
  );
}
