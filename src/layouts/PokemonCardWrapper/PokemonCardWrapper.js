import PokemonCard from "../../components/PokemonCard/PokemonCard"
import "./PokemonCardWrapper.css"
const PokemonCardWrapper = (props) => {
    return(
        <section className="pokemonCardWrapper">
            <PokemonCard 
            pokemonName="Wooper" 
            pokemonType={["Water", "Ground"]} 
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png" 
            pokemonHP="55" 
            updateCounter={props.updateCounter} />
            <PokemonCard 
            pokemonName="Charmeleon" 
            pokemonType={["Fire",]} 
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" 
            pokemonHP="58" 
            updateCounter={props.updateCounter}/>
            <PokemonCard 
            pokemonName="Pikachu" 
            pokemonType={["Electric",]} 
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
            pokemonHP="55" 
            updateCounter={props.updateCounter}/>
            <PokemonCard 
            pokemonName="Lucario" 
            pokemonType={["Fighting", "Steel"]} 
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" 
            pokemonHP="70" 
            updateCounter={props.updateCounter}/>
        </section>
    )
}

export default PokemonCardWrapper