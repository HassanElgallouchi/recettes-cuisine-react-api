import React, { Component } from 'react';
import './Footer.css'
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png'; 
import twitter from '../../assets/img/twitter.png';
import youtube from '../../assets/img/youtube-logotype.png';



export default class Index extends Component {

    constructor(props){

        super(props);

        this.state = {

            style : {
                height: '100px',
                border: '1px solid #E117FB',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#FCFE9F'

            },     
            imgStyle : {
                border: '1px solid red',
            },  
            logoHeight :{
                height: '31px',
            },
            space: {
                display: 'flex',
                justifyContent: 'space-around',
                paddingLeft: '30px',
            }
            
        }

    }
    render() {
        return (
            <div style={this.state.style}>
                
                <div style={this.state.imgStyle}>  

                <div style={this.state.space}> 
                  <p>Food Recp</p>
                </div>

                <div style={this.state.space}>
                  <a href='#'><img src={instagram} style={this.state.logoHeight} alt="logo d'instagram"/></a>
                  <a href='#'><img src={facebook} alt="logo de facebook"/></a>
                  <a href='#'><img src={twitter} alt="logo de twitter"/></a>
                  <a href='#'><img src={youtube} style={this.state.logoHeight} alt="logo de youtube"/></a>
                 </div> 
                </div>

                <p>
                    Tous droits réservées FoodLover.org 2020-2021
                </p>
               
                
            </div>
        )
    }
}
