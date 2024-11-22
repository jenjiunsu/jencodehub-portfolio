import React, { useEffect } from 'react';

function CubeComponent() {
    useEffect(() => {
        const container = document.querySelector('.unique-container');
        const zValues = [-2, -1, 0, 1, 2];
        zValues.forEach(z => {
            const cube = document.createElement('div');
            cube.classList.add('unique-cube');
            cube.style.setProperty('--z', z);

            for (let x = -2; x <= 2; x++) {
                const div = document.createElement('div');
                div.classList.add('unique-div');
                div.style.setProperty('--x', x);
                div.style.setProperty('--y', 0);

                const span = document.createElement('span');
                span.classList.add('unique-span');
                span.style.setProperty('--i', 3);
                div.appendChild(span);
                cube.appendChild(div);
            }
            container.appendChild(cube);
        });

        function activeRandomCube() {
            let spans = document.querySelectorAll('.unique-cube .unique-span');
            setInterval(() => {
                let randomIndex = Math.floor(Math.random() * spans.length);
                let randomSpan = spans[randomIndex];

                randomSpan.classList.add('active');

                setTimeout(() => {
                    randomSpan.classList.remove('active');
                }, 2000);
            }, 500);
        }

        activeRandomCube();
    }, []);

    return <div className="unique-container"></div>;
}

export default CubeComponent;