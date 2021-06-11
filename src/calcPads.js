import { useState } from "react";
import { Row, Container, Col, Button } from 'react-bootstrap';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = [ '/', '*', '-', '+'];
const ids = {
  7: 'seven', 
  8: 'eight', 
  9: 'nine', 
  4: 'four', 
  5: 'five', 
  6: 'six', 
  1: 'one', 
  2: 'two', 
  3: 'three', 
  0: 'zero',
  '/': 'divide', 
  '*': 'multiply', 
  '-': 'subtract', 
  '+': 'add'
}

export function Calculator() {

    const [formula, setformula] = useState("0");

    const handleClick = (e) => {
        
        if (e.currentTarget.value === "AC") {
            setformula("0");
        } else if (formula < "1") {

            setformula(e.currentTarget.value);
        } else {
            setformula(formula + e.currentTarget.value);
        }
        console.log(e.currentTarget.value);
    };

    return (
        <div className="entire">
            <div className="disp">{formula}</div>
            <hr />
        <Container className='calc-container'>
            <Row>
                <Col><Button value="AC" onClick={handleClick} className="spesh pad wide-boi">AC</Button></Col>
                <Col><Button value="/" onClick={handleClick} className="operator pad slash">/</Button></Col>
            </Row>
            <Row>
                <Col><Button value="7" onClick={handleClick} className="pad">7</Button></Col>
                <Col><Button value="8" onClick={handleClick} className="pad">8</Button></Col>
                <Col><Button value="9" onClick={handleClick} className="pad">9</Button></Col>
                <Col><Button value="*" onClick={handleClick} className="operator pad">*</Button></Col>
            </Row>
            <Row>
                <Col><Button value="4" onClick={handleClick} className="pad">4</Button></Col>
                <Col><Button value="5" onClick={handleClick} className="pad">5</Button></Col>
                <Col><Button value="6" onClick={handleClick} className="pad">6</Button></Col>
                <Col><Button value="-" onClick={handleClick} className="operator pad">-</Button></Col>
            </Row>
            <Row>
                <Col><Button value="1" onClick={handleClick} className="pad">1</Button></Col>
                <Col><Button value="2" onClick={handleClick} className="pad">2</Button></Col>
                <Col><Button value="3" onClick={handleClick} className="pad">3</Button></Col>
                <Col><Button value="+" onClick={handleClick} className="operator pad">+</Button></Col>
            </Row>
            <Row>
            <Col><Button value="0" onClick={handleClick} className="pad wide-boi zero">0</Button></Col>
            <Col><Button value="." onClick={handleClick} className="spesh pad decimal">.</Button></Col>
            <Col><Button value="=" onClick={handleClick} className="operator pad equals">=</Button></Col>
            </Row>
        </Container>
        </div>
    )
}