import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";

const ops = ["/", "*", "+", "-"];

export function Calculator() {
  const [formula, setformula] = useState("0");
  const [lastClicked, setLastClicked] = useState(undefined);

  const lastOperator = () => {
    const length = formula.length - 1;
    let result = undefined;
    for (let i = length; i >= 0; i--) {
      if (!ops.includes(formula[i])) {
        result = i + 1;
        break;
      }
    }
    const preventCrash = formula.slice(0, result);
    const alt = eval(preventCrash);
    return alt;
  };

  const handleClick = (e) => {
    const { innerText } = e.target;

    switch (innerText) {
      case "AC": {
        setformula("0");
        break;
      }

      case "=": {
        let answer = undefined;
        if (ops.includes(lastClicked)) {
          answer = lastOperator();
        } else {
          answer = eval(formula);
        }

        setformula(answer);

        break;
      }

      case ".": {
        const last = formula.slice(-1)[0];

        if (last !== ".") {
          setformula(formula + ".");
        }
        break;
      }

      case "-": {
        const last = formula.slice(-1)[0];

        if (last !== "-") {
          setformula(formula + "-");
        }

        break;
      }

      default: {
        if (ops.includes(innerText)) {
          if (!ops.includes(lastClicked)) {
            setformula(formula + innerText);
          } else {
            const remove = formula.slice(0, -1);
            setformula(remove + innerText);
          }
        } else {
          if (formula === "0") {
            setformula(innerText);
          } else {
            setformula(formula + innerText);
          }
        }
      }
    }

    setLastClicked(innerText);
  };

  return (
    <div className="entire">
      <div className="disp">{formula}</div>
      <hr />
      <Container className="calc-container">
        <Row>
          <Col>
            <button onClick={handleClick} className="spesh pad wide-boi">
              AC
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="operator pad slash">
              /
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button onClick={handleClick} className="pad">
              7
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="pad">
              8
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="pad">
              9
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="operator pad">
              *
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button onClick={handleClick} className="pad">
              4
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="pad">
              5
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="pad">
              6
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="operator pad">
              -
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button onClick={handleClick} className="pad">
              1
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="pad">
              2
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="pad">
              3
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="operator pad">
              +
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button onClick={handleClick} className="pad wide-boi zero">
              0
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="spesh pad decimal">
              .
            </button>
          </Col>
          <Col>
            <button onClick={handleClick} className="operator pad equals">
              =
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
