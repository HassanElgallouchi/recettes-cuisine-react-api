import React, { Component } from 'react';
import './Footer.css'
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook_.png'; 
import youtube from '../../assets/img/youtube-logotype.png';



export default class Index extends Component {

    constructor(props){

        super(props);

        this.state = {

            style : {
                height: '190px',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '128px',
            },      
            logoHeight :{
                height: '31px',
            },
            space: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'space-around',
                paddingLeft: '30px',
                margin:'20px',
                width:'60%',
                height:'31px',
            }
            
        }

    }
    render() {
        return (

            <div className='footer'style={this.state.style}>
                
                <div style={this.state.imgStyle}>  

                    <div style={this.state.space}> 
                    <h3>Foodies</h3>
                    </div>

                <div className='boxSocialMedia' style={this.state.space}>
                  <a href='#'><img src={instagram} style={this.state.logoHeight} alt="logo d'instagram"/></a>
                  <a href='#'><img src={facebook} style={this.state.logoHeight} alt="logo de facebook"/></a>
                  <a href='#'><img src={youtube} style={this.state.logoHeight} alt="logo de youtube"/></a>

                 
                </div>

                
                
                
                </div>

                <p>By Rebecca KANU, Hassan EL GHALLOUCHI and Nawal MAIZATE</p>

                <p>
                    Tous droits réservés Foodies.org 2020-2021
                </p>
               
                
            </div>
        )
    }

}