import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import { GET_RECEIPE } from "../../data/queries";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

function Home() {
    const { loading, error, data } = useQuery(GET_RECEIPE,{
        fetchPolicy: "cache-and-network",
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes</p>;
    const recipes = data.getReceipe;

    return (
        <section className="home">
            <Link to="/receipe" className="btn btn-success">Add Receipes</Link>
            <div className='custom-card'>
                    {recipes.map((recipe) => (
                        <Card key={recipe.id} className="card-style">
                            <Card.Img src={recipe.image} alt={recipe.receipeName} className="card-image"/>
                        <Card.Body>
                            <Card.Title className="p-title">{recipe.receipeName}</Card.Title>
                            <Card.Text className="p-style">{recipe.description}</Card.Text>
                            <Link to={`/viewReceipe/${recipe.id}`} className="btn btn-success">View Recipe</Link>
                        </Card.Body>
                        </Card>
                    ))}
            </div>
        </section>
    );
}

export default Home;
