import React, {useState, useEffect} from 'react'
import {IconButton, Menu, MenuItem, Grid} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import Nav from './layout/nav'
import Footer from './layout/footer'
import Article from '../components/article'
import Bid from '../components/bid'
import Collection from '../components/collection'
import Seller from '../components/seller'
import './style/home.css'

const useStyles = makeStyles((theme) => ({
  moreButton: {
    outline: 'none !important',
    color: '#06edfe'
  },
}))
const options = [
  'None',
  'Atria',
  'Callisto',
];
const ITEM_HEIGHT = 48;
function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{backgroundColor:'#1B0E60'}}>
      <Nav />
      <div className='content'>
        <Grid container style={{padding: '50px 0'}}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-1.png' />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-2.png' />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-3.png' />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-4.png' />
          </Grid>
        </Grid>
        <div>
          <span style={{color: 'white', fontSize: 30, padding: 5}}>Top</span>
          <span style={{color: '#02f0fe', fontSize: 30, padding: 5}}>sellers</span>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.moreButton}
          >
            <ExpandMore />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <span style={{color: 'white', fontSize: 30, padding: 5}}>in</span>
          <span style={{color: '#02f0fe', fontSize: 30, padding: 5}}>1 day</span>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.moreButton}
          >
            <ExpandMore />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-2.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-1.png' />
          </Grid>
        </Grid>
        <div>
          <span style={{color: 'white', fontSize: 30, paddingRight: 10}}>Hot</span>
          <span style={{color: '#02f0fe', fontSize: 30}}>bids</span>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
        </Grid>
        <div style={{paddingTop: 30}}>
          <span style={{color: 'white', fontSize: 30, paddingRight: 10}}>Hot</span>
          <span style={{color: '#02f0fe', fontSize: 30}}>Collection</span>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid item lg={6} md={12}>
            <Collection image='/images/collection-1.png' />
          </Grid>
          <Grid item lg={6} md={12}>
            <Collection image='/images/collection-1.png' />
          </Grid>
          <Grid item lg={6} md={12}>
            <Collection image='/images/collection-1.png' />
          </Grid>
          <Grid item lg={6} md={12}>
            <Collection image='/images/collection-1.png' />
          </Grid>
        </Grid>
        <div style={{color: 'white', textAlign: 'center', fontSize: 40}}>
          EXPOLRE
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}
export default Home
