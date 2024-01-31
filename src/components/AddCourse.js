import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{
        //alert("Teasting");
        document.title="Add Course || Nagpurian Suraj"
    }, []);

    const [course,setCourses]=useState({});

    

    // form handler function 
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    // creating function for post data
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("succcess");
            toast.success("Course added successfully",{
                position: "top-center"
            });
            setCourses({title: '', description: '', id: ''});
        },(error)=>{
            console.log(error);
            console.log("error");
            toast.error("Error! Something went wrong...",{
                position: "top-center"
            })
        }   
        )
    }



    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId"> CourseId</Label>
                    <Input type="text"
                     placeholder="Enter here" 
                     name="userId"
                     id="userId"
                     onChange={(e)=>{
                        setCourses({...course,id: e.target.value });
                    }}></Input>
                </FormGroup>
            
                <FormGroup>
                    <Label for="title"> Course Title</Label>
                    <Input type="text" placeholder="Enter title here"
                    id="title"
                    onChange={(e)=>{
                        setCourses({...course,title: e.target.value });
                    }}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description"> Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here"
                    id="description"
                    onChange={(e)=>{
                        setCourses({...course,description: e.target.value });
                    }}
                    style={{height: 150}} ></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" >AddCourse</Button>
                    <Button type="reset" color="warning ml-2" >Clear</Button>
                </Container>
            </form>
        </Fragment>
    )
}

export default AddCourse;