'use client'

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
        <>
            <Card className="flex-cols flex-wrap w-md m-4">
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
        </>
    )
}
export default CardElement;