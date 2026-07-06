import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate("/");
    }

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <nav className="w-full flex justify-center py-4 bg-[#4F46C8] text-white shadow-md">
                <div className="container flex justify-between items-center mx-8">

                    {/* Logo */}
                    <Link
                        to="/home"
                        className="text-2xl font-bold px-2 py-1 rounded-md relative
      hover:scale-105 hover:bg-white/10 transition-all duration-200"
                    >
                        Blog Pessoal
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-lg">

                        <Link
                            to="/postagens"
                            className="px-2 py-1 rounded-md relative
        hover:bg-white/10 hover:scale-105 hover:text-[#E8E6FF]
        transition-all duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-white
        hover:after:w-full after:transition-all after:duration-300"
                        >
                            Postagens
                        </Link>

                        <Link
                            to="/temas"
                            className="px-2 py-1 rounded-md relative
        hover:bg-white/10 hover:scale-105 hover:text-[#E8E6FF]
        transition-all duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-white
        hover:after:w-full after:transition-all after:duration-300"
                        >
                            Temas
                        </Link>

                        <Link
                            to="/cadastrartema"
                            className="px-2 py-1 rounded-md relative
        hover:bg-white/10 hover:scale-105 hover:text-[#E8E6FF]
        transition-all duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-white
        hover:after:w-full after:transition-all after:duration-300"
                        >
                            Cadastrar tema
                        </Link>

                        <Link
                            to="/perfil"
                            className="px-2 py-1 rounded-md relative
        hover:bg-white/10 hover:scale-105 hover:text-[#E8E6FF]
        transition-all duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-white
        hover:after:w-full after:transition-all after:duration-300"
                        >
                            Perfil
                        </Link>

                        <Link
                            to=""
                            onClick={logout}
                            className="px-2 py-1 rounded-md relative
        hover:bg-red-500/20 hover:scale-105 hover:text-red-200
        transition-all duration-200"
                        >
                            Sair
                        </Link>

                    </div>
                </div>
            </nav>
        );
    }

    return <>{component}</>;
}

export default Navbar;