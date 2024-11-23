function Button({ id, name, events }) {
    return (
    <button id={id} name={name} onClick={events} >
    ALERTA 
    </button>
    );
}

export default Button;