import React,{useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'



function Search() {
    const [input , setInput] = useState("")
    const navigate = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }


  return (
    <FormStyle onSubmit={SubmitHandler}>
        <div>
            <FaSearch></FaSearch>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
    )
}


const FormStyle  = styled.form`
    margin: 0rem 20rem;
    div{

        position:relative;
        width:100%;
    }
    input{
        width:100%
        border: none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color:white;
        border-radius: 1rem;
        padding:1rem 3rem;
        border:none;
        outline:none;
        
    }
    svg{
        position: absolute;
        top:50%;
        left:0%;
        transform:translate(100%, -50%);
        color:white;

    }
 `
export default Search