const Button = ({ name = false, containerClass }) => {
    return (
    <button className={`btn $${containerClass}`}>
        {name}
    </button>
    )
}

export default Button
