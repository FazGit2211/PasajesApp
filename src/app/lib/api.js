const urlPrincipal = 'http://localhost:8080/admin/';
export async function fetchAllEnterprises() {
    try {
        const response = await fetch(urlPrincipal + "enterprise");
        const data = await response.json();
        const dataArray = [];
        Object.entries(data).forEach((elem) => {
            dataArray.push(data[elem]);
        })
        return dataArray;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchAllCitys() {
    try {
        const response = await fetch(urlPrincipal + "city");
        const data = await response.json();
        const dataArray = [];
        Object.entries(data).forEach((elem) => {
            dataArray.push(data[elem]);
        })
        return dataArray;
    } catch (error) {
        console.error(error);
        return [];
    }
}