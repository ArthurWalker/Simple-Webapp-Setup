import React from "react";
import {Link} from "react-router-dom";
import {Button,Image} from "semantic-ui-react";
class Homepage extends React.Component{
    render(){
        return(
            <div>
                Hi! This is Homepage

                <Image src={require('../../pics/anh1.jpg')}/>
                
                <Button primary>Ok</Button>
            </div>
        );
    }
}

export default Homepage;
