import styles from './Historia.module.css'
import LinkButton from '../layout/LinkButton'
import historia1 from '../../img/historia1.png'
import historia2 from '../../img/historia2.png'
import historia3 from '../../img/historia3.png'
import historia4 from '../../img/historia4.png'
import historia5 from '../../img/historia5.png'

function Historia(){
    return(
        <section className={styles.home_container}>
            <p>clique nos botoes para ir para as noticias</p>
            <div className={styles.button}>
                <div>
                    <LinkButton to="/historia1" text="Por que a Petrobras quase não tem concorrentes na produção de combustível" img={historia1}/>
                    <h3>Por que a Petrobras quase não tem concorrentes na produção de combustível</h3>
                    <LinkButton to="/historia2" text="Ler Noticia 2"img={historia2} />
                    <h3>Monteiro Lobato x Getúlio Vargas: a batalha do petróleo</h3>
                </div>
                <div>
                    <LinkButton to="/historia3" text="Criação da Petrobras rachou Senado em 1953" img={historia3}/>
                    <h3>Criação da Petrobras rachou Senado em 1953</h3>
                    <LinkButton to="/historia4" text="A outra face de Vargas: soberania energética e projeto nacional"img={historia4} />
                    <h3>A outra face de Vargas: soberania energética e projeto nacional</h3>
                </div>
                <div>
                    <LinkButton to="/historia5" text="Ler Noticia 2"img={historia5} />
                    <h3>Getúlio Vargas, a Petrobrás e o silêncio dos militares</h3>    
                </div>    
                   
            </div>
        </section>
    )
}

export default Historia