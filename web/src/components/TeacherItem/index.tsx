import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
                <strong>Diego Fernandes</strong>
                <span>Química</span>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet libero quis pulvinar dictum. 
                <br/><br/>
                Nullam pulvinar nec arcu sit amet aliquet. Sed facilisis posuere urna id euismod. Praesent porta nibh vel arcu commodo varius. Nullam sit amet arcu eget risus imperdiet luctus. Mauris bibendum nunc ut tellus tempor dictum. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entre em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem