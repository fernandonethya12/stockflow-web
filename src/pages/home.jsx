import React from "react";

import Card from "../components/Card";
import Button from "../components/button";
import {Button as ShadCNButton} from "../components/ui/button";

function Home() {
    return (
        <div>Home

            <Card Content={"Card 1 "}/>
            <Card Content={"Card 2 "}/>

            <Button/>
            <ShadCNButton>Ok</ShadCNButton>
            <ShadCNButton variant="outline">Cancel</ShadCNButton>
        </div>
    )
}

export default Home