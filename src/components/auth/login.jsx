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

const Login = ({ handleLogin, loginError }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        handleLogin({username, password})
    }

    return (
        <div>
            {loginError ? <Error>{loginError}</Error> : ''}

            <table>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <label htmlFor="email">Email</label>
                        </td>
                        <td>
                            <Input
                                type="email"
                                name="email"
                                value={username}
                                onChange={handleChangeName}
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
                        <td></td>
                        <td>
                            <button
                                className="button-blue"
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login
