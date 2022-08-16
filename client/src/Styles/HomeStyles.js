import styled from "styled-components"

export const FullTodosContainer = styled.div`
    width: 65%;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 2rem;
    background-color: #282c34;
`

export const TodosTitleContainer = styled.div`
    position: absolute;
    width: 65%;
`

export const TodosTitle = styled.h1`
    float: left;
    margin: 10px;
`

export const CreateTodoButton = styled.button`
    cursor: pointer;
    background-color: darkgreen;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    float: right;
    margin: 10px
`