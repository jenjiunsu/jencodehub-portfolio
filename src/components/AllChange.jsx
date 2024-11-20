import '../index.css';

export const Box = () => {
    const circles = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="circle">
            {index}
        </div>
    ));

    return (
        <div className="box">
            {circles}
        </div>
    );
};

