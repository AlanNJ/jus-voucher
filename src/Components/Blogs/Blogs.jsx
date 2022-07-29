import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import line from "../Blogs/blog-image/image 24.png";
import line2 from "../Blogs/blog-image/image 24 (1).png";
import line3 from "../Blogs/blog-image/image 25.png";
import line4 from "../Blogs/blog-image/image 26.png";
import { FaComment } from 'react-icons/fa';
import "./Blog.css"
import { Link } from "react-router-dom";


const Blogs = () => {
  return (
    <div className="Blogs_container">
      <Grid container spacing={2} >

        <Grid item sm={6} xs={12} md={3}>

          <Card>

            <CardMedia
              component="img"
              image={line}
              alt="green iguana"
              height="460rem"

            />

          </Card>
        </Grid>

        <Grid item sm={6} xs={12} md={3} >


          {/* <IconButton className="circle"><img src={circle}></img></IconButton> */}
          <div className="card">

            <h2 className="Blog_heading">
              Congratulations
              winners on
              winning free
              vouchers!
            </h2>


            <Typography className="icon" ><FaComment /></Typography>

            <br />

            <Link to="/blog_category"><Button style={{ backgroundColor: '#FA7D29' }} variant="contained">Read More</Button></Link>

          </div>



        </Grid>


        <Grid item sm={6} xs={12} md={3}>

          <Card>
            <CardMedia
              component="img"
              image={line2}
              alt="green iguana"
              height="460rem"
            />


          </Card>
        </Grid>


        <Grid item sm={6} xs={12} md={3} >



          <div className="card">
            <h2 className="Blog_heading">
              Congratulations
              winners on
              winning free
              vouchers!
            </h2>


            <Typography className="icon" ><FaComment /></Typography>

            <br />

            <Link to="/blog_category"><Button style={{ backgroundColor: '#FA7D29' }} variant="contained">Read More</Button></Link>

          </div>


        </Grid>


        <Grid item sm={6} xs={12} md={3} >


          <div className="card">
            <h2 className="Blog_heading">
              Congratulations
              winners on
              winning free
              vouchers!
            </h2>


            <Typography className="icon" ><FaComment /></Typography>

            <br />

            <Link to="/blog_category"><Button style={{ backgroundColor: '#FA7D29' }} variant="contained">Read More</Button></Link>

          </div>

        </Grid>


        <Grid item sm={6} xs={12} md={3} >

          <Card>
            <CardMedia
              component="img"
              image={line3}
              alt="green iguana"
            />


          </Card>
        </Grid>


        <Grid item sm={6} xs={12} md={3} >

          <div className="card">
            <h2 className="Blog_heading">
              Congratulations
              winners on
              winning free
              vouchers!
            </h2>


            <Typography className="icon" ><FaComment /></Typography>

            <br />

            <Link to="/blog_category"><Button style={{ backgroundColor: '#FA7D29' }} variant="contained">Read More</Button></Link>

          </div>


        </Grid>

        <Grid item sm={6} xs={12} lg={3} >

          <Card>
            <CardMedia
              component="img"
              image={line4}
              alt="green iguana"
            />


          </Card>
        </Grid>

      </Grid>


    </div>
  );
};

export default Blogs;
