import React from "react";
import './viewReceipe.css';
import { VIEW_RECEIPE } from "../data/viewQuery";
import {  useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

function ViewReceipe(){
    const {id}=useParams()
    const { loading,error,data}=useQuery(VIEW_RECEIPE,{
        fetchPolicy: "cache-and-network",
        variables:{
            id
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes</p>;
    const recipes = data.getReceipe; 
    return(
        <>
        <div className="receipe-style">
            {recipes.map((receipe, index) => (
                <div key={index}>
                    <p className="para-title"><strong>Name:</strong><br/><span className="para-text">{receipe.receipeName}</span></p>
                    <p className="para-title"><strong>Ingredients:</strong><br/><span className="para-text">{receipe.ingredients}</span></p>
                    <p className="para-title"><strong>Instructions:</strong><br/><span className="para-text">{receipe.instruction}</span></p>
                    <div className="para-img">
                        <img src={receipe.image} alt={receipe.receipeName} height={300} width={300}/>
                    </div>
                    <h3>{receipe.receipeName}</h3>
                </div>
            ))}
        </div>
        </>
    )
}
export default ViewReceipe;