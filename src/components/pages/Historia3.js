import styles from './Historia3.module.css'
import imagem_materia from '../../img/imagem_materia.png'


function Historia3(){
    return(
        <section className={styles.home_container}>
            <h1>Criação da Petrobras rachou Senado em 1953</h1>
            <img src={imagem_materia} alt=""></img>
            <p>Em 1953, o Senado brasileiro se viu envolvido em um intenso debate em relação à criação da Petrobras, a estatal petrolífera do Brasil. Esse ano marcou um momento crucial na definição da política petrolífera do país, com posições polarizadas entre os chamados "ultranacionalistas" e os "entreguistas".</p>
            <p>Os "ultranacionalistas" defendiam que o petróleo e toda a cadeia industrial relacionada a ele deveriam ser monopólio estatal. Eles temiam que as empresas multinacionais de petróleo, como a Standard Oil, explorassem os recursos do Brasil de maneira prejudicial ao país.</p>
            <p>Por outro lado, os "entreguistas" defendiam a participação da iniciativa privada, incluindo empresas estrangeiras, na exploração do petróleo. Eles acreditavam que essa abertura poderia contribuir para o desenvolvimento do setor e para a recuperação econômico-financeira do Brasil.</p>
            <p>O senador Kerginaldo Cavalcanti foi um defensor do monopólio estatal, alertando sobre os perigos das multinacionais de petróleo, enquanto o senador Ezechias da Rocha argumentou a favor da participação da iniciativa privada para impulsionar o progresso do país.</p>
            <p>Getúlio Vargas, então presidente, havia proposto a criação da Petrobras em 1951. Seu projeto original não previa o monopólio estatal, permitindo a associação da estatal com empresas privadas. Ele reconhecia que o governo sozinho não tinha os recursos financeiros e o conhecimento técnico para desenvolver a indústria do petróleo.</p>
            <p>No entanto, o projeto passou por modificações na Câmara dos Deputados, que incluiu o monopólio estatal. Quando o projeto chegou ao Senado, o lado favorável à iniciativa privada prevaleceu. No entanto, o projeto retornou à Câmara, onde as emendas do Senado foram rejeitadas. Finalmente, em outubro de 1953, a Petrobras foi criada com o monopólio estatal, uma mudança significativa em relação ao plano original.</p>
            <p>Esse debate refletiu preocupações em relação ao papel das multinacionais de petróleo, seus métodos de operação e o interesse nacional. O Brasil, assim como outros países, estava buscando equilibrar a exploração de seus recursos naturais com o desenvolvimento econômico e a soberania nacional.</p>
            
        </section>
    )
}

export default Historia3