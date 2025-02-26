'use client'

import { useRouter } from "next/navigation";
import { useData } from "@/app/contexts/DataContext";
import { Button, CardMedia } from "@mui/material";
import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
const CardElement = ({ dataValues }) => {
    const { updateData } = useData();
    const router = useRouter();
    const handleClick = () => {
        updateData(dataValues);
        router.push("/pages/pasaje-compra");
    }
    return (
        <>
            <Card className="flex-cols flex-wrap w-md m-4">
                <CardHeader>
                    <CardMedia component="img" alt="`${dataValues.nombreImagen}`" height="140" image="/public/`${dataValues.nombreImagen}`"></CardMedia>
                </CardHeader>
                <CardContent>
                    <Typography>
                        {dataValues.nombre},{dataValues.provincia},Distancia :{dataValues.distancia} Km
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="success" onClick={handleClick}>Viajar</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default CardElement;