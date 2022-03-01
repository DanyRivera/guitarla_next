import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
    return (

        <Layout
            pagina='Nosotros'
        >

            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>

                    <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt="Imagen Sobre Nosotros" />


                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur interdum lorem sed finibus. Duis justo ex, auctor a libero eu, pharetra faucibus elit. Nulla gravida a nulla blandit gravida. Suspendisse dapibus orci dui, vitae accumsan arcu auctor sit amet.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur interdum lorem sed finibus. Duis justo ex, auctor a libero eu, pharetra faucibus elit. Nulla gravida a nulla blandit gravida. Suspendisse dapibus orci dui, vitae accumsan arcu auctor sit amet. Etiam ac augue vitae diam convallis efficitur. Quisque sed lacus sed velit euismod vestibulum. 
                        </p>
                    </div>
                </div>
            </main>

        </Layout>

    )
}

export default Nosotros