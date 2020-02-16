import React from "react";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



// import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Switch from '@material-ui/core/Switch';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";


import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import doctor1 from "../../assets/img/faces/con2.jpg"
import doctor2 from "../../assets/img/faces/con1.jpg"
import doctor3 from "../../assets/img/faces/con4.jpg"
import doctor4 from "../../assets/img/faces/con5.jpg"
import doctor5 from "../../assets/img/faces/con3.png"




import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from 'material-ui-rating'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';






const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};








const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}



export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;


  // export default function DialogSelect() {
  //   const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };






  return (
    <div>

      <GridContainer>
        <GridItem>
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Entry",
                tabIcon: Face,
                tabContent: (
                  // image={require("")
                  <div className={classNames(classes.main)}>
                    <Parallax >
                      <div className={classes.container}>
                        <div className={classes.brand}>
                          <h1 className={classes.title}>Healing is not Linear</h1>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">How do you feel today?</FormLabel>
                            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                              <FormControlLabel value="female" control={<StyledRadio />} label="Confused" />
                              <FormControlLabel value="male" control={<StyledRadio />} label="Okay, I guess" />
                              <FormControlLabel value="other" control={<StyledRadio />} label="Energized" />
                            </RadioGroup>
                          </FormControl>
                          <h2></h2>
                        </div>

                      </div>
                    </Parallax>
                  </div>
                )
              },
              {
                tabName: "Counselors",
                tabIcon: "personPinIcon",
                tabContent: (
                  <div>
                    <div>
                      <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "180px"}} src= {doctor1} alt= "doctorA" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Mary Jones
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              When asked what they want to change when they come to counselling, many people say they just want to be happy. However, when asked how they would know they were happy, most of them are completely stumped. Happiness seems to be something people...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">



                            <Button onClick={handleClickOpen}>Contact</Button>
                            <Dialog className="1" disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>6755678945</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontSize: "0.80em", fontWeight: "bold" }}>mary.jonas@gmail.com</h5>

                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>

                      <div>
                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "180px"}} src= {doctor2} alt= "doctorB" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Miachel Kamphff
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              What is happiness? It’s a huge question, isn’t it? Many clients will say to their counsellors "I just want to be happy", yet when asked what that might look like, they have no idea. They often know that it is not 'this'; this feeling of...
    
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen2}>Contact</Button>
                            <Dialog className="2" disableBackdropClick disableEscapeKeyDown open={open2} onClose={handleClose2}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>7645626363</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontSize: "0.80em", fontWeight: "bold" }}>miachel.kamphff@gmail.com</h5>
                              <DialogActions>
                                <Button onClick={handleClose2} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>


                    )
                  },


                      <div>
                      <Card className={classes.root}>
                        <CardActionArea>
                          < CardMedia
                            className={classes.media}
                            image="bg3.jpg"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <img style={{ height: "200px", width: "280px" }} src={doctor3} alt="doctorC" />
                            <Typography gutterBottom variant="h5" component="h2">
                              Patric Star
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Often, people ask me how I am in polite conversation; my stock response is "I'm OK thanks". But, when I stop to think about how I am, often I have a lot of things going on. Things ranging from day to day mundane stuff to things that may be causing...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen3}>Contact</Button>
                            <Dialog className="3" disableBackdropClick disableEscapeKeyDown open={open3} onClose={handleClose3}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>5436467488</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontSize: "0.80em", fontWeight: "bold" }}>patric.star@gmail.com</h5>

                              <DialogActions>
                                <Button onClick={handleClose3} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>


                      <div>
                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "10px"}} src= {doctor4} alt= "doctorD" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Joseph Clain
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              When you come for cognitive behaviour therapy, the anxiety and depression that you come forward to work on is addressed by looking at two main aspects - cognitions first, then the behaviours. What are cognitions? The definition of cognition is "the...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen4}>Contact</Button>
                            <Dialog className="4" disableBackdropClick disableEscapeKeyDown open={open4} onClose={handleClose4}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>4467747478</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontSize: "0.80em", fontWeight: "bold" }}>joseph.clain@gmail.com</h5>
                              <DialogActions>
                                <Button onClick={handleClose4} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>


                    <div>
                      <Card className={classes.root}>
                        <CardActionArea>
                          < CardMedia
                            className={classes.media}
                            image="bg3.jpg"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <img style={{ height: "200px", width: "200px" }} src={doctor5} alt="doctorE" />
                            <Typography gutterBottom variant="h5" component="h2">
                              Mira Kathy
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Anxiety can affect all our lives in so many ways, and it's certainly an issue that is being explored more frequently in the therapy room. All of us can feel anxious, and we can often effectively manage these complex emotions, but sometimes our...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen5}>Contact</Button>
                            <Dialog className="5" disableBackdropClick disableEscapeKeyDown open={open5} onClose={handleClose5}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>6476545660</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontSize: "0.80em", fontWeight: "bold" }}>mira.kathy@gmail.com</h5>
                              <DialogActions>
                                <Button onClick={handleClose5} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </div>

                ),
              }

            ]}
          />
        </GridItem>

      </GridContainer>



      
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>


    </div>
  );
}







