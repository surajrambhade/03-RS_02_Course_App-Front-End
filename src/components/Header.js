import React from "react";
import { Card, CardBody } from "reactstrap";

function Header( ){
    return (
        <div >
            <Card className="text-center bg-warning my-2">
                <CardBody>
                <h1>Welcome to Course Application by Nagpurian Suraj</h1>
                </CardBody>
            </Card>
        </div>
    );
};

export default Header;