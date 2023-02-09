import React from "react";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  collectionRoot: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0'
  },
  collection: {
    position: 'relative',
    width: 600,
    height: 150,
    
  },
  text: {
    position: 'absolute',
    top: 50,
    left: 180,
    zIndex: 3
  },
  title: {
    color: 'white',
    fontSize: 18
  },
  name: {
    color: 'gray',
  },
  description: {
    color: 'gray'
  },
  hoverZoom: {
    overflow: 'hidden',
    width: 600,
    height: 150,
    borderRadius: 10,
    cursor: 'pointer'
  },
  image: {
    width: 600,
    height: 150,
    // transition: 'transform 0.4s ease',
    // "&:hover": {
    //   transform: 'scale(1.1)'
    // },
  }
}))
export default function Collection(props) {
  const classes = useStyles();
  const {image} = props;

  return (
    <div className={classes.collectionRoot}>
      <div className={classes.collection}>
        <div className={classes.text}>
          <div className={classes.title}>Bipple Special Edition</div>
          <div className={classes.name}>Single Item</div>
        </div>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src={image}></img>
        </div>
      </div>
    </div>
  );
}