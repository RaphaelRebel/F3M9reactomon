import "./PokemonCard.css"
import React from 'react'

class PokemonCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {hp: 0, caughtOrRan: false}
    }

 types = this.props.pokemonType.map(function(type){
       return <span key={type} className={`pokemonCard__type pokemonCard__type--${type}`}>
                    {type}
                </span>
    })

    attack = () => {
        let randomNumber = Math.floor(Math.random() * (21 - 1) + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function(){
            if(this.state.hp <= 0){
                this.setState({
                    hp: 0,
                    caughtOrRan: true,
                })
            }
        })
    }

    catch = () => {
        
        this.setState({
            caughtOrRan: true
        })
        let damagePercentage = 100 - Math.floor( this.state.hp / this.props.pokemonHP * 100)
        let dice = Math.floor(Math.random() * (100 - 1) + 1)
        if(damagePercentage > dice ){
            this.props.updateCounter();
        }
    }

    componentDidMount(){
        this.setState({hp: this.props.pokemonHP})
    }

    render(){
        let catchButton = null
        if(this.state.caughtOrRan === false){
            catchButton = 
            <>
         <button onClick={this.attack} className="pokemonCard__button pokemonCard__button--attack">
         Attack
         </button>
            <button onClick={this.catch} className="pokemonCard__button pokemonCard__button--catch ">
            Catch
        </button>
         </>
        }

    return(
        <article className="pokemonCard">
            <header className="pokemonCard__header">
                <h2 className="pokemonCard__title">{this.props.pokemonName || ""}</h2>
                <div className="pokemonCard__labelWrapper">
                
                {this.types || "nope"}
                </div>
            </header>
            <section className="pokemonCard__section">
                <figure className="pokemonCard__figure">
                    <img src={this.props.pokemonImage || ""} />
                </figure>
                <div className="pokemonCard__h3wrapper">
                <h3 className="pokemonCard__hp">{this.state.hp}</h3>
                </div>
            </section>
                <footer className="pokemonCard__footer">
                   
                    {catchButton}
                </footer>
               
        </article>
    );
}}

export default PokemonCard