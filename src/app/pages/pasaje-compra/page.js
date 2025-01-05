'use client'
import { useData } from "@/app/contexts/DataContext";
import FormCreate from "@/app/ui/forms/create-pasaje/FormCreate";
export default function PasajeCompra() {
    const { data } = useData();
    console.log(data);
    return (
        <>
            <h2>Página de para comprar el pasaje</h2>
            <FormCreate />
        </>
    )
}