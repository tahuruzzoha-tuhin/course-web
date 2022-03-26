import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Engineers from '../Engineer/Engineers';
import Footer from '../Footer/Footer';
import './Info.css';
const Info = () => {
    const [engineers, setEngineers] = useState([]);
    const [cart, setCart] = useState([]);
    // const [name, setName] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setEngineers(data));
    }, []);

    const handleAddToCart = (engineer) => {
        let newCart = [...cart, engineer];

        if (newCart.length <= 4) {
            setCart(newCart);
        }
    }
    const removeButton = () => {
        setCart([]);
    }

    const choiceButton = () => {
        if (cart.length === 0) {
            alert('Empty Bag')
        } else {
            const newCart2 = [];
            const rand = Math.floor(Math.random() * cart.length);
            newCart2.push(cart[rand]);
            setCart(newCart2);
        }
    }

    return (
        <div className="info-container">
            <div className="engineers-container">
                {
                    engineers.map(engineer => <Engineers
                        key={engineer.key}
                        engineer={engineer}
                        handleAddToCart={handleAddToCart}
                    >
                    </Engineers>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                    removeButton={removeButton}
                    key={cart}
                    choiceButton={choiceButton}

                ></Cart>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Info;