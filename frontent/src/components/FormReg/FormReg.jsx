import {useState} from 'react';
import './FormReg.css'

export default function RegistrationForm(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errors, setErrors] = useState({})

    const validate = () =>{
        const newErrors = {};
        if (name.length < 4) newErrors.name = 'Имя должно быть более 4 символов'
        if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Введите коректный email'
        if (pass.length < 6) newErrors.pass = 'Пароль должен содержать более 6 символов';
        setErrors(newErrors);
        return Object.keys(newErrors).length == 0;

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (validate()){
            console.log('Форма отправлена:', {name,email, pass});
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <lebel>Имя:</lebel>
                <input type='text' vale={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <span style={{color : 'red'}}> {errors.name} </span>}
            </div>
            <div>
                <lebel>Почта:</lebel>
                <input type='email' vale={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <span style={{color : 'red'}}> {errors.email} </span>}
            </div>
            <div>
                <lebel>Пароль:</lebel>
                <input type='password' vale={pass} onChange={(e) => setPass(e.target.value)}/>
                {errors.pass && <span style={{color : 'red'}}> {errors.pass} </span>}
            </div>
            <button type='submit'>Зарегестрироваться</button>
        </form>
    )
}

