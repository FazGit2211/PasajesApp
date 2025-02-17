const urlPrincipal = 'http://localhost:8080/empresa';
//Obtener todas las empresas
export async function getAll() {
    try {
        const response = await fetch(urlPrincipal + "/getAll");
        if (response.ok) {
            const dataArray = [];
            try {
                const data = await response.json();
                for (const id in data) {
                    if (Object.prototype.hasOwnProperty.call(data, id)) {
                        console.log(data[id]);
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