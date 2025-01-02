const urlPrincipal = 'http://localhost:8080/admin/';
//Obtener todas las empresas
export async function GET() {
    try {
        const response = await fetch(urlPrincipal + "enterprise");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}


