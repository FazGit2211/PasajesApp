// pages/api/usuarios.js

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Hacer una solicitud a una API externa usando fetch
        try {
            const response = await fetch('http://localhost:8080/admin/enterprise');
            const data = await response.json();

            // Respondemos con los datos obtenidos
            return res.status(200).json(data);
        } catch (error) {
            // En caso de error, responder con un código 500
            return res.status(500).json({ message: 'Error al obtener usuarios', error });
        }
    }

}
