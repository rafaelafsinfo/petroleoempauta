import styles from './Integrantes.module.css'


function Integrantes(){
    return(
        <section className={styles.home_container}>
            <h1>
                <span>Integrantes</span>
            </h1>
            <div className={styles.link}>
                <p></p>
                <h2>Amanda Fantine h. Diniz</h2>
                <h2>Eduardo Gabriel Castro Diniz</h2>
                <h2>Julia Akemi Iwazaki Hayashi</h2>
                <h2>Miguel Tomio Toledo Nonaka</h2>
                <h2>Paula Emy Tamay</h2>
                <h2>Rafael Alves Freitas da Silva</h2>
            </div>
        </section>
    ) 
}

export default Integrantes