import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 180px;
    font-weight: bold;
    font-family: 'pragmata-pro';
    border: 1px solid #ccc;
`

const Error = styled.div`
    background-color: red;
    border: 1px solid black;
    padding: 3px;

`
const Message = styled.div`
    background-color: green;
    border: 1px solid black;
    padding: 3px;

`

const Register = ({registerMessage, registerError, register}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [error, setError] = useState(null)

    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeRepeatPassword =(e) => {
        setPasswordRepeat(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        if (password !== passwordRepeat) {
            setError('Пароли не совпадают!')
        } else {
            register({
                username,
                email,
                password
            })
        }
    }

    return (
        <div>
            {error ? <Error>{error}</Error> : ''}
            {registerError ? <Error>{registerError}</Error> : ''}
            {registerMessage ? <Message>{registerMessage}</Message> : ''}
            <table>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <label htmlFor="username">Name</label>
                        </td>
                        <td>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChangeName}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <label htmlFor="email">Email</label>
                        </td>
                        <td>
                            <Input
                                type="email"
                                name="eamil"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <label htmlFor="password">Password</label>
                        </td>
                        <td>
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <label htmlFor="passwordRepeat">Repeat password</label>
                        </td>
                        <td>
                            <Input
                                type="password"
                                name="passwordRepeat"
                                value={passwordRepeat}
                                onChange={handleChangeRepeatPassword}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button
                                className="button-blue"
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Register