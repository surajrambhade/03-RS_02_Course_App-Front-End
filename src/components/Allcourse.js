import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";

import axios from "axios";
import { Input } from "reactstrap";
import { toast } from "react-toastify";

const Allcourse=()=>{
    useEffect(()=>{
        //alert("Teasting");
        document.title="All Courses || Nagpurian Suraj"
    }, []);

    // function to call url
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then
        ((response)=>{
            // success
            //console.log(response);
            console.log(response.data);
            toast.success("Courses has been loaded", {
                position: "top-right",
            });
            setCourses(response.data);
        },
        (error)=>{
            // for error
            console.log(error);
            toast.error("Somthing went worng!",{
                position: "top-right",
            });

        })
    };

    // calling loading fucntion
    useEffect(()=>{
        getAllCoursesFromServer();
    }, [] )

    // remove course by id
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }

    const [courses, setCourses] = useState([
        // {title: "Java Course", description:"This is demo course"},
        // {title: "spring Course", description:"This is demo course"},
        // {title: "React Js Course", description:"This is demo course"},
        // {title: "C++ Course", description:"This is demo course"},

    ])

    return(
        <div>
            <h1>All Courses</h1>
            <p>The list of course are as follows:- </p>
            {courses.length > 0  
                ? courses.map((item) => ( <Course key={item.id} course={item}  update={updateCourses}/>))
                : "NO Courses"}
        </div>
    )
}
export default Allcourse;