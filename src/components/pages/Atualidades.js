import styles from './Atualidades.module.css'
import LinkButton from '../layout/LinkButton'
import atualidades1 from '../../img/atualidades1.png'
import atualidades2 from '../../img/atualidades2.png'
import atualidades3 from '../../img/atualidades3.png'
import atualidades4 from '../../img/atualidades4.png'
import atualidades5 from '../../img/atualidades5.png'

function Atualidades(){

    return(
        <section className={styles.home_container}>
            <p>clique nos botões para ir para as noticias</p>
            <div className={styles.button}>
                <div>
                    <LinkButton to="/atualidades1" text="MPF recomenda que Ibama negue a exploração de petróleo na Foz do Amazonas"img={atualidades1} />
                    <h3>MPF recomenda que Ibama negue a exploração de petróleo na Foz do Amazonas</h3>
                    <LinkButton to="/atualidades2" text="Lula diz que Petrobras vai ter 'todo o cuidado', mas pode 'continuar sonhando' com exploração de petróleo na foz do Amazonas" img={atualidades2}/>
                    <h3>Lula diz que Petrobras vai ter 'todo o cuidado', mas pode 'continuar sonhando' com exploração de petróleo na foz do Amazonas</h3>
                </div>
                <div>
                    <LinkButton to="/atualidades3" text="Decisão sobre exploração de petróleo na Foz do Amazonas está próxima, afirma Lula"img={atualidades3} />
                    <h3>Decisão sobre exploração de petróleo na Foz do Amazonas está próxima, afirma Lula</h3>
                    <LinkButton to="/atualidades4" text="entenda em cinco pontos a disputa pelo petroleo na foz do amazonas"img={atualidades4} />
                    <h3>entenda em cinco pontos a disputa pelo petroleo na foz do amazonas</h3>    
                </div>
                <div>
                    <LinkButton to="/atualidades5" text="Exploração de petróleo na foz do Amazonas: quais seriam os impactos no Marajó?" img={atualidades5}/>
                    <h3>Exploração de petróleo na foz do Amazonas: quais seriam os impactos no Marajó?</h3>
                </div>    
                   
            </div>
        </section>    
    )
}

export default Atualidades