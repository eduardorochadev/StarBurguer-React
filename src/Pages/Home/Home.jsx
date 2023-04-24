import Card from '../../components/Cards/Card'
import '../Home/home.css'

export default function Home() {


    const descricoes = {
        d1:'natan',
        d2:'natanzin',
        d3:'natanzao',
    }


    return (
        <>
        <div className='cards'>
        <Card description={descricoes.d1}/>
        <Card description={descricoes.d2}/>
        <Card description={descricoes.d3}/>
        </div>
        </>
    )
}