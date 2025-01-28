
import CardOffer from "./cardOffer";

const CardsOfferts = ({ data }) => {
    return (
        <>
            <h3>Tarjetas</h3>
            <h3>Ofertas de pasajes disponibles por tiempo limitado!</h3>
            {data.map(el => {
                return el.pasajes.map(e => {
                    return <ul key={e.id}><li><CardOffer dataValues={e} /></li></ul>
                })
            })
            }
        </>
    )
}

export default CardsOfferts;