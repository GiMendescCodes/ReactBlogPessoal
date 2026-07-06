import { toast } from 'react-toastify';

const config = {
    position: 'top-right' as const,
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light' as const,
    style: {
        borderRadius: '16px',
        fontWeight: '500',
        border: '2px solid #D8D4FF',
        boxShadow: '0 8px 20px rgba(0,0,0,.12)',
    }
};

export function ToastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {

        case 'sucesso':
            toast.success(mensagem, {
                ...config,
                style: {
                    ...config.style,
                    background: '#F8F8FC',
                    color: '#5E4FE3',
                },
                className: 'toast-sucesso',
            });
            break;

        case 'erro':
            toast.error(mensagem, {
                ...config,
                style: {
                    ...config.style,
                    background: '#FFF5F7',
                    color: '#D9485F',
                },
                className: 'toast-erro',
            });
            break;

        case 'info':
        default:
            toast.info(mensagem, {
                ...config,
                style: {
                    ...config.style,
                    background: '#F5F3FF',
                    color: '#4F46C8',
                },
                className: 'toast-info',
            });
            break;
    }
}