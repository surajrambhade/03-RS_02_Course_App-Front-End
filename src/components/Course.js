import axios from "axios";
import React from "react";
import { Card,cardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container, CardBody } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";



const Course=({ course ,update })=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
           (response)=>{
            toast.success("Course deleted!",{
                position:"top-right"
            });
            update(id);
           },
           (error)=>{
            toast.error("Course not deleted!! server problem")
           }
        )
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container >
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button  color="warning ml-3" >Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default Course;