import * as React from 'react'

function Name({ name, onNameChange }) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={onNameChange} />
        </div>
    )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={onAnimalChange}
            />
        </div>
    )
}

// 🐨 uncomment this
function Display({name, animal}) {
    return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

/*
    ELEVAÇÃO DE ESTADO (state lifting) acontece quando estados precisam ser
    compartilhados entre componentes irmãos. Como irmãos 
    não podem compartilhar diretamente seus estados entre si,
    seus estados precisam ser deslocados para o componente pai.

    REBAIXAMENTO DE ESTADO (state colocation) ocorre quando um 
    estado não precisa mais ser compartilhado entre componentes irmãos. Nesses casos, podeemos retirar o estado compartilhado do componente pai e devolvê-lo para o componente filho.
*/

export default function Exercicio03() {
    // 🐨 add a useState for the animal
    const [name, setName] = React.useState('')
    const [animal, setAnimal] = React.useState('')

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleAnimalChange(event) {
        setAnimal(event.target.value)
    }

    return (
        <form>
            <Name name={name} onNameChange = {handleNameChange} />
            {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
            <FavoriteAnimal animal = {animal} onAnimalChange = {handleAnimalChange} />
            {/* 🐨 pass the animal prop here */}
            <Display name={name} animal={animal} />
        </form>
    )
}