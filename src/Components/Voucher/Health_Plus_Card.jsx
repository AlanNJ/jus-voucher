import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import layer from "../../Images/Rectangle 26 (1).png"
import layer2 from "../../Images/Rectangle 26.png"
import "./index.css"
import { Typography } from '@mui/material';
import line from "../../Images/Line 14.png";
import Carousel_Cont from '../Home/Carousel/Carousel_Cont';



export default function Health_Plus_Card() {

    return (<>
        <Carousel_Cont />
        <div className='Health_wrapper'>

            <Grid container spacing={2}>

                <Grid item sm={12} xs={12} md={12}>


                    <div className="head_container">
                        <div className="line"><img src={line} /></div>
                        <h2 className="head-section">Health plus card</h2>
                        <div className="line"><img src={line} /></div>

                    </div>

                    <p className='health_para'> Day by day, the financial system is festering and in such situations; using special discount codes and coupons have become a boon for crazy online shoppers all around the world. So if you are one of those quick-witted online shoppers who persistently try to dig up deals and coupons which could reduce their expenses to a great extent; then here we are to help you. Below are the best coupons and deals from leading-com websites like Jabong, Flipkart, Amazon, Nykaa, and Myntra which will help you to grab more products and items at less expense.</p>
                </Grid>
            </Grid>
            <br />
            <br />

            <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={12}>
                    <Card>

                        <CardMedia
                            component="img"
                            image={layer2}
                            alt="green iguana"
                        />


                    </Card>
                </Grid>
            </Grid>

            <br />
            <br />
            <br />


            <Grid container spacing={2} >
                <Grid item sm={3} >
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card>


                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />


                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>


                <Grid item sm={3} >
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />


                    </Card>
                </Grid>


                <Grid item sm={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>

                <Grid item sm={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />


                    </Card>
                </Grid>

                <Grid item sm={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={layer}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
            </Grid>





        </div>

    </>
    );
}
