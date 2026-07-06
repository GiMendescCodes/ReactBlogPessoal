import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"
import homeImg from "../../assets/home.png";

function Home() {
    return (
        <>
            <div className="bg-[#E8E6FF] flex justify-center">
                <div className="container grid grid-cols-2 py-10">
                    <div className="flex flex-col gap-6 justify-center">
                        <h2 className="text-5xl font-bold text-[#5E4FE3]">
                            Você chegou ao lugar certo!
                        </h2>

                        <p className="text-xl text-[#2D2D2D]">
                            Expresse aqui seus pensamentos e opiniões.
                        </p>

                        <div>
                            <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src={homeImg}
                            alt="Imagem Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home