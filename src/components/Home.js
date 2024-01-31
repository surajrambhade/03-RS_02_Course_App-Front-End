import { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home=()=>{
    useEffect(()=>{
        //alert("Teasting");
        document.title="Home || Nagpurian Suraj"
    }, []);
    return(
        <div>
            <div className="text-center"> 
                <h1 className="display-3">Nagpurian Suraj</h1>
                <p>
                    This web is created by Suraj The Software Eng. Enjoy!
                </p>
           
            <Container>
                <Button color="primary" outline>Start Using Services</Button>
            </Container>
            </div>
        </div>
    );
};

export default Home;