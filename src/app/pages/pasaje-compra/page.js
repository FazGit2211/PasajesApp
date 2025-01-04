import { useRouter } from "next/navigation";
import FormCreate from "@/app/ui/forms/create-pasaje/FormCreate";
export default function PasajeCompra() {
    const router = useRouter();  // Inicializar el hook useRouter
    const values = router.query;
    console.log(values);
    return (
        <>
            <h2>Página de para comprar el pasaje</h2>
            <FormCreate offerData={values}/>
        </>
    )
}