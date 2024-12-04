import { fetchEmpresas } from "./api";
export async function getServerSideProps() {
    try {
        const empresas = await fetchEmpresas();
        // Retornar los datos como props
        return {
            empresas
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return {
            props: {
                empresas: []
            },
        };
    }
}