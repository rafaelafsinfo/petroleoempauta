import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

import atualidades1 from '../../img/atualidades1.png'
import historia1 from '../../img/historia1.png'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Petroleo em pauta</span>
            </h1>
            <p>clique nos botoes para ir para as noticias</p>
            <div className={styles.button}>
                <div>
                    <LinkButton to="/atualidades" text="Cenario Atual" img={atualidades1}/>
                    <h3>Cenario Atual</h3>
                </div>
                <div> 
                    <LinkButton to="/historia" text="Conheça a origem da petrobras"img={historia1} />
                    <h3>Conheça a origem da petrobras</h3>
                </div>    
                   
            </div>
        </section>
    ) 
}

export default Home