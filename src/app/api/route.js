const urlPrincipal = 'http://localhost:8080/admin/';
//Obtener todas las empresas
export async function GET() {
    try {
        const response = await fetch(urlPrincipal + "enterprise");
        if (response.ok) {
            const dataArray = [];
            try {
                const data = await response.json();
                for (const id in data) {
                    if (Object.prototype.hasOwnProperty.call(data, id)) {
                        dataArray.push(data[id]);
                    }
                };
            } catch (error) {
                console.error(error);
            }
            return dataArray;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}


