import React, { useEffect } from 'react';
import '../index.css';

const Circular = () => {

    useEffect(() => {
    const nav = document.querySelector("nav");
    const toggleBtn = nav.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    return () => {
        toggleBtn.removeEventListener("click", () => {
        nav.classList.toggle("open");
        });
    };
    }, []);

    return (
    <span className='menu-1'>
        <div className="content-1">
        <div className="toggle-btn">
            <i className='bx bx-plus'></i>
        </div>
        <span style={{ '--i': 1 }}>
            <a href="#"><i className='bx bx-happy-alt'></i></a>
        </span>
        <span style={{ '--i': 2 }}>
            <a href="#"><i className='bx bx-smile'></i></a>
        </span>
        <span style={{ '--i': 3 }}>
            <a href="#"><i className='bx bx-wink-smile'></i></a>
        </span>
        </div>
    </span>
    );
};

export default Circular;
