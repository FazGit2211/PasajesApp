import FormPasaje from "@/app/ui/forms/FormPasaje";
import { useRouter } from "next/router";
export default function PasajeForm() {
    const router = useRouter();
    const { numero, formaPago, valor, fechaVigencia, fechaCaducidad } = router.query;
    return (
        <main>
            <h4>Pasajes</h4>
            <FormPasaje />
        </main>
    )
}