'use client'
import { getAll } from "@/app/api/ciudadRoute";
import FormCreate from "@/app/ui/forms/create-pasaje/FormCreate";
export default async function PasajeCompra() {
    //fetch valores
    const ciudades = await getAll();
    if (ciudades.length == 0) {
        return <h3>No Hay Datos</h3>
    }

    return (
        <main>
            <FormCreate ciudad={ciudades} />
        </main>
    )
}