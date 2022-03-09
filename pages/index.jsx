import Layout from '../components/Layout'
import Listado from '../components/Listado';
import Curso from '../components/Curso';

export default function Home({ guitarras, cursos }) {

  console.log(cursos)

  return (

    <Layout
      pagina='Inicio'
    >

      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado
          guitarras={guitarras}
        />

        <Curso
          cursos={cursos}
        />

      </main>

    </Layout>

  )
}

export async function getServerSideProps() {

  const urlGuitarrras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;

  const [resGuistarras, resCursos] = await Promise.all([
    fetch(urlGuitarrras),
    fetch(urlCursos)
  ])

  const [guitarras, cursos] = await Promise.all([
    resGuistarras.json(),
    resCursos.json()
  ])

  return {
    props: {
      guitarras,
      cursos
    }
  }

}
