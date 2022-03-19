import styles from '../styles/Curso.module.css';

const Curso = ({ cursos }) => {

    const { titulo, contenido, imagen } = cursos;

    return (

        <section>

            <div className={`${styles.grid} contenedor`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>

                    <a className={styles.enlace} href="#">Más Información</a>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 50%; 
                }
            `}</style>

        </section>

    )
}

export default Curso