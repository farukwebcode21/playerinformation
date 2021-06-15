import React,{useState} from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data.json';
import Playercart from '../Playercart/Playercart';
import './Playerdata.css';


const Playerdata = () => {
    const name = Data.slice(0, 15); 
    const [player] = useState(name);
    const [cart, setCart] =useState([]);
    
    // console.log(player);
    const handleplayer = (player) =>{
    //    console.log('Prloduct added', player);
       const newCart =[...cart, player]
       setCart(newCart);
    }

    return (
        <div className="player">
            <div className="container grid">
                {
                    player.map(player => <Playercart 
                        handleplayer = {handleplayer}
                        player ={player}></Playercart>)
                }
            </div>
            <div className="Selected-player">
               <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Playerdata;