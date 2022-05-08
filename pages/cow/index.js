// Premade components
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// My components
import Continue from '../../comps/Continue';
import Nav from "../../comps/Nav"
import TaskBar from "../../comps/Tasks";

// Data
import { chba, chco2, chto, ch, cogun } from '../../data/selection';
import { getWeapon } from '../../data/selection';

// Styled components
const Container = styled.div`
  widtH: 400px;
  height: 90vh;
  margin: 0 auto;
  outline: 2px red solid;

  .hover:hover {
    filter: drop-shadow(4px 4px 8px red);
    cursor: pointer;
  }

  .coDefault {
    position: relative;
    width: 250px;
    height: 250px;
    top: 100px;
    left: 70px;
  }

  .gun {
    position: relative;
    width: 200px;
    height: 200px;
    top: 100px;
    margin: 0 auto;
  }
  .gunDefault {
    position: relative;
    width: 400px;
    height: 400px;
    left: 240px;
    top: 50px;
    transform: rotate(20deg);
  }

  .circle {
    position: relative;
    top: -510px;
    left: 240px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
  }
  .circle:hover {
    background-color: green;
    transform: scale(0.8);
    transition: 0.3s;
    cursor: pointer;
  }
  .circle:active {
    transform: scale(1.1);
    background-color: yellow;
  }
`

// Page content starts below

export default function CowIndex() {

  let r = useRouter();
  let {page} = r.query;
  let w = getWeapon();

  if (page === undefined) {
    page = 0;
  }

  if (page === 0) { // PAGE 0 //
    if (w === "CO2") {
      alert("CO2 for cow")
    } else if (w === "Gun") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
          <div className="coDefault">
            <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
          </div>
          <div className="gun hover" onClick={
            () => r.push({
              query: {
                page: Number(page) + 1
              }
            })}>
            <Image src={cogun[0].weapon} layout="fill" objectFit='contain' />
          </div>
        </Container>
      </div>
    } else if (w === "Tongs") {
      return <div>
        <Container>
          <Nav />
          <TaskBar />
        </Container>
      </div>
    } else {
      return <div>
        <Container>
          <Nav />
          <h1>😂😂😂 u broke it moron COW ERROR</h1>
        </Container>
      </div>
    }
  } else if (r.asPath === "/cow?page=1") { // PAGE 1 //
      if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <h1>Bath</h1>
          </Container>
        </div>
      } else if (w === "Gun") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="coDefault">
              <Image src={cogun[0].animal} layout="fill" objectFit='contain' />
            </div>
            <div className="gunDefault">
              <Image src={cogun[1].weapon} layout="fill" objectFit='contain' />
            </div>
            <div className="circle" onClick={
              () => r.push({
                query: {
                  page: Number(page) + 1
                }
              })}></div>
          </Container>
        </div>
      } else {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <h1>Tongs</h1>
          </Container>
        </div>
      }
  } else if (r.asPath === "/cow?page=2") {
      if (w === "CO2") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <h1>CO2</h1>
          </Container>
        </div>
      } else if (w === "Gun") {
        return <div>
          <Container>
            <Nav />
            <TaskBar />
            <div className="coDefault">
              <Image src={cogun[1].animal} layout="fill" objectFit='contain' />
            </div>
          </Container>
          <Continue />
        </div>
      }
  }
}