import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import circle from "../Blog_Category/Blog_category_images/circle.svg";
import line from "../Blog_Category/Blog_category_images/Rectangle 103.png";
import line2 from "../Blog_Category/Blog_category_images/Line 14.png";
import { FaComment } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import "./Blog_page.css"

const Blog = () => {
    return (
        <div className='blog_categories'>
            <div className="head_container">
                <div className="line"><img src={line2} /></div>
                <img src={circle}></img>
                <div className="line"><img src={line2} /></div>

            </div>

            <br />
            <br />

            <Grid container spacing={2} >

                <Grid item sm={6} xs={12} md={6}>

                    <Card>

                        <CardMedia
                            component="img"
                            image={line}
                            alt="green iguana"
                            height="260rem"

                        />

                    </Card>
                </Grid>

                <Grid item sm={6} xs={12} md={6} >

                    <h5 className='grid_h5'>Dental Travel Industry is way ahead of where it actually started. A coupleof years back , few patients travelled to neighbouring countries for affordable treatment options. They were often looking for just one treatment and were happy with the options available close to home.But the scenario has changed quite a bit in the last decade, people are now looking for exciting destinations and value for money for complete package of dental treatments.</h5>



                </Grid>
            </Grid>



            <Grid item sm={12} xs={12} md={12}>
                <h5 className='grid_h5'>Another point which ranks quite high when choosing a destination is the ease of Communication & Travel . And since India ticks all of the above boxes it has emerged as the dental hub of southeast Asia. Withqualified doctors, affordability of travel and treatments and the variety of locations India has become a dream destination for patients from various countries including neighbourimg countries like Iran, Afganistanas well as USA, Canada and various European countries.</h5>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
                <h5 className='grid_h5'>Although current Covid-19 travel restrictions have slowed down the influx of patients, but according to various studies ,this sector is bound to grow at an exponential rate. For booking your treatment you can visit www.dentaltravellers.com Various factors which have contributedto the popularity of India as a dental travel destination: High standards of dental care: India has 1000+ dental clinics Accredited by (NABH) which use the best of technologies present across the globe. Most Indian dentists have great qualifications and over 10per cent of the doctors practising in the UK and US are Indian.</h5>


            </Grid>
            <br />
            <Typography className='heart_comment'><BsHeart fontSize="5rem" /> <FaComment style={{ fontSize: "5rem", paddingLeft: "4rem" }} /> </Typography>
            <br />

            <div className="head_container">
                <div className="line"><img src={line2} /></div>
                <h2 className="head-section">Categories</h2>
                <div className="line"><img src={line2} /></div>

            </div>
            <br />
            <div style={{ marginLeft: "4rem" }}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} md={3}>


                        <div className='img'></div>

                    </Grid>
                    <Grid item sm={6} xs={12} md={3}>

                        <div className='img2'></div>

                    </Grid>
                    <Grid item sm={6} xs={12} md={3}>

                        <div className='img3'></div>

                    </Grid>
                    <Grid item sm={6} xs={12} md={3}>

                        <div className='img4'></div>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Blog