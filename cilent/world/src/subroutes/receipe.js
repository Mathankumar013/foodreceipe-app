import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import './receipe.css';
import { CREATE_RECEIPE } from '../data/mutation';
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

function Receipe() {
    const [form, setForm] = useState({
        receipeName: "",
        ingredients: "",
        instruction: "",
        description: ""
    });
    const [ file, setFile]=useState(null)
    const [createReceipe] = useMutation(CREATE_RECEIPE);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        const fileUrl = URL.createObjectURL(selectedFile);
        setFile(fileUrl); // Update the image URL in the parent component

        // Convert the file to base64 if your backend accepts base64 data
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            setForm({ ...form, image: reader.result });
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReceipe({
                variables: {
                    receipeName: form.receipeName,
                    ingredients: form.ingredients,
                    instruction: form.instruction,
                    description: form.description,
                    image: form.image // include the image in the mutation variables
                }
            });
            alert("Recipe submitted successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error submitting recipe:", error);
            alert("Failed to submit recipe.");
        }
    };

    return (
        <Container className="receipe-display">
            <h2 className="text-center">Food Recipes</h2>
            <Form className="form-receipe" onSubmit={handleSubmit}>
                <Form.Group className="bottom-box">
                    <Form.Label><h4>Recipe Name</h4></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter recipe name"
                        value={form.receipeName}
                        name="receipeName"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="bottom-box">
                    <Form.Label><h4>Ingredients</h4></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter ingredients"
                        value={form.ingredients}
                        name="ingredients"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="bottom-box">
                    <Form.Label><h4>Instructions</h4></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter instructions"
                        value={form.instruction}
                        name="instruction"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="bottom-box">
                    <Form.Label><h4>Description</h4></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                        value={form.description}
                        name="description"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="bottom-box">
                    <Form.Label><h4>Recipe Image</h4></Form.Label>
                    <Form.Control type="file" onChange={handleImageChange}/>
                    {file && (
                        <img src={file} alt="Recipe Preview" style={{ marginTop: '10px', height: '100px', width: '100px' }} />
                    )}
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-styles">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Receipe;
