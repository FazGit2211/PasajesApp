'use client'
import "./cardStyle.css";
import { useRouter } from "next/navigation";
import { useData } from "@/app/contexts/DataContext";
import { Button } from "@mui/material";
import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
const CardElement = ({ dataValues }) => {
    const { updateData } = useData();
    const router = useRouter();
    const handleClick = () => {
        updateData(dataValues);
        router.push("/pages/pasaje-compra");
    }
    return (
        <div>
            <Card className="card">
                <CardHeader title="Destinos">
                </CardHeader>
                <CardContent>
                    <Typography>
                        {dataValues.nombre},{dataValues.provincia},Distancia :{dataValues.distancia}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="success" onClick={handleClick}>Viajar</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default CardElement;