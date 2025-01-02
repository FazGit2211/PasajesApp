import FormCreate from "@/app/ui/forms/create-pasaje/FormCreate";
import { useRouter } from "next/navigation";
export default function PasajeCompra(){
    const router = useRouter();
    const { prop } = router.query;
    let data = null;
    if (prop) {
        try {
            data = JSON.parse(prop);  // Parsear el JSON de vuelta a un objeto
        } catch (e) {
            console.error('Error al parsear el JSON', e);
        }
    }
    console.log(data)
    return(
        <>
        <h2>Página de para comprar el pasaje</h2>
        <FormCreate offerData={prop}/>
        </>
    )
}