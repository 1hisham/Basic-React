import { useEffect,useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react'

function Recipe() {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("instuctions");
    let params = useParams();
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const deatilData = await data.json();
        setDetails(deatilData);

    }

    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
    <DetailWrapper>
        <div>
         <h2> {details.title}</h2>
         <img src={details.image} alt=""/>
        </div>
        <Info>
            <Button className={activeTab  === "instuction" ? "active" : ""} onClick={() => setActiveTab("instuction") }>Instuction</Button>
            <Button className={activeTab  === "incredient" ? "active" : ""} onClick={() => setActiveTab("incredient")} >Incredients</Button>
            {activeTab ==="instuction" && (
            <div>
                <h3 dangerouslySetInnerHTML={{__html:details?.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:details?.instruction}}></h3>
            </div>

            )}
            {activeTab === "incredient" && (
                <ul>
                    {details.extendedIngredients?.map((ingredient) => (
                   
                        <li key={ingredient.id}> {ingredient.original}</li>
                    ))}
                </ul>
            )}
        </Info>
    </DetailWrapper>
  )




}
const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display:flex;
    width:125%;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color:white;
    }
    h2{
        margin-bottom: 2rem;

    }
    li{
        font-size: 1.5rem;
        line-height:2rem;

    }
    ul{
        margin-top:2rem;
    }
    h3{
        font-size: 1.2rem;
        line-height:2rem;
        width:100%;
    }
`;

const Button = styled.button`
 padding:1rem 2rem;
 color: #313131;
 backgound:white;
 border:2px solid black;
 margin-right:2rem;
 font-weight:600;
 
`
const Info = styled.div`
    margin-left: 10rem;
`


export default Recipe