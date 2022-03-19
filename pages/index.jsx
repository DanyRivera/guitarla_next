import Layout from '../components/Layout'
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';

export default function Home({ guitarras, cursos, entradas }) {

  return (

    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >

      <main>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado
          guitarras={guitarras}
        />

        <Curso
          cursos={cursos}
        />

        <section className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
        </section>

      </main>

    </Layout>

  )
}

export async function getServerSideProps() {

  const urlGuitarrras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3`;

  const [resGuistarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarrras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, cursos, entradas] = await Promise.all([
    resGuistarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      cursos,
      entradas
    }
  }

}
