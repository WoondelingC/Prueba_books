import styled from "styled-components";


const Formulario = styled.form`
    width: 60vh;
    display: grid;
    margin: auto;
`
const Input = styled.input`
    border-radius: 5px;
    width: 98%;
    height: 30px;
    line-height: 30px;
    padding: 0 0 0 7px;
    border: 1px solid #4f5e5d;
`
const InputPages = styled.input`
    width: 20%;
    border-radius: 5px;
    height: 25px;
    line-height: 30px;
    border: 1px solid #4f5e5d;
`
const Select = styled.select`
    width: 100%;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    padding: 0 30px 0 8px;
    border: 1px solid #4f5e5d;
`
const Texarea = styled.textarea`
    width: 98%;
    font-family: 'Roboto', sans-serif;
`

export {Formulario, Input, InputPages, Select, Texarea}