import React, {SelectHTMLAttributes} from 'react';
import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    onChange: any;
    value: string;
}

const Button:React.FC<SelectProps> = ({onChange, value}) =>{
    return(
        <div>
            <select name="genero" onChange={onChange} value={value}>
                <option value="0">Selecione um Gênero</option>
            </select>
        </div>
    );
}

export default Button;