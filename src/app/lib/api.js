const urlPrincipal = 'http://localhost:8080/admin/';
export async function fetchEmpresas() {
    const response = await fetch(urlPrincipal + "empresa");
    const data = await response.json();
    return data;
}