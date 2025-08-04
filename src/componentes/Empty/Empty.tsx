import EmptyImg from '../../assets/empty.svg';
import "./Empty.css";


interface IEmptyProps {
    show: boolean;
    title?: string;
}

export default function Empty({title = "Nenhum dado encontrado!", show,}: IEmptyProps) {
    return (
        <>
            {show === true && (
                <div className='content-empty'>
                    <img src={EmptyImg} alt= "Imagem" />
                    <h1>{title}</h1>
                </div>
            )} 
        </>
    );
}