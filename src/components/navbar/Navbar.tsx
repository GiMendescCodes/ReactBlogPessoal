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

                    <Link
                        to="/home"
                        className="text-2xl font-bold hover:text-[#E8E6FF] transition-colors"
                    >
                        Blog Pessoal
                    </Link>

                    <div className="flex items-center gap-6 text-lg">
                        <Link
                            to="/postagens"
                            className="hover:text-[#E8E6FF] transition-colors"
                        >
                            Postagens
                        </Link>

                        <Link
                            to="/temas"
                            className="hover:text-[#E8E6FF] transition-colors"
                        >
                            Temas
                        </Link>

                        <Link
                            to="/cadastrartema"
                            className="hover:text-[#E8E6FF] transition-colors"
                        >
                            Cadastrar tema
                        </Link>

                        <Link
                            to="/perfil"
                            className="hover:text-[#E8E6FF] transition-colors"
                        >
                            Perfil
                        </Link>

                        <Link
                            to=""
                            onClick={logout}
                            className="hover:text-[#E8E6FF] transition-colors"
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