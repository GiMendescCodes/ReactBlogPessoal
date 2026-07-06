import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {
    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className="flex justify-center bg-[#F8F8FC] py-10">
            <div className="container mx-4 max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl">

                {/* Capa */}
                <img
                    className="h-72 w-full object-cover"
                    src="/src/assets/perfil.gif"
                    alt="Capa do Perfil"
                />

                {/* Foto */}
                <div className="flex justify-center">
                    <img
                        className="relative -mt-24 h-48 w-48 rounded-full border-8 border-white object-cover shadow-lg"
                        src={usuario.foto}
                        alt={`Foto de perfil de ${usuario.nome}`}
                    />
                </div>

                {/* Informações */}
                <div className="flex flex-col items-center gap-4 px-8 py-10">

                    <h2 className="text-4xl font-bold text-[#5E4FE3]">
                        Meu Perfil
                    </h2>

                    <div className="w-full max-w-md rounded-2xl bg-[#E8E6FF] p-6 text-center shadow">

                        <p className="mb-3 text-2xl font-semibold text-[#2D2D2D]">
                            {usuario.nome}
                        </p>

                        <p className="text-lg text-gray-600">
                            {usuario.usuario}
                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Perfil