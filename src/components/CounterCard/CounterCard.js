import "./CounterCard.css"

function CounterCard(props){
    return(
       <section className="counterCard">
            <h2 className="counterCard__h2">{props.counter}</h2>
       </section>
    )
}

export default CounterCard