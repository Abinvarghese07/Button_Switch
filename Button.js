import React from 'react';
import pic from '../assets/pexels-daniel-nettesheim-1162361.jpg'
import { useState } from 'react';

const Button = () => {

    const[activeTab,setActiveTab] = useState('instructiions')
    return (
        <div>
        <div className='Container'>
            <img  src={pic} alt="title" />
            <h4>title</h4>
            <button className={activeTab === 'instructions'? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
            <button className={activeTab === 'ingredients'? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>

            <div className='para'>
                 {
                (activeTab === 'instructions' && (
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                ))
            }

            {
                 (activeTab === 'ingredients' && (
                    <p>Lorem ipsum" is a commonly used placeholder text in the pr sual ration.content. Here's an example of "Lorem ipsum" text:</p>
                ))

            }
            </div>
           
            

            

    
            
        </div>
       
        </div>
    );
};

export default Button;