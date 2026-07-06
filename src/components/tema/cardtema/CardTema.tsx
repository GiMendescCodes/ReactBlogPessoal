import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps {
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8D4FF] bg-white shadow-md hover:shadow-lg transition-shadow">

            <header className="bg-[#7C6CF2] px-6 py-3 text-2xl font-bold text-white">
                Tema
            </header>

            <div className="flex-1 bg-[#F8F8FC] p-8">
                <p className="text-3xl font-medium text-[#2D2D2D]">
                    {tema.descricao}
                </p>
            </div>

            <div className="flex">
                <Link
                    to={`/editartema/${tema.id}`}
                    className="flex w-full items-center justify-center bg-[#7C6CF2] py-3 text-white transition-colors hover:bg-[#5E4FE3]"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletartema/${tema.id}`}
                    className="flex w-full items-center justify-center bg-[#F26B7A] py-3 text-white transition-colors hover:bg-[#E05566]"
                >
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema