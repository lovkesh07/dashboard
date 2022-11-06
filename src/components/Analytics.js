import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Assignment Pending</h5>
          <h2>0</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>

      <div className="analytic">
        <div className="content">
          <h5>Rank</h5>
          <h2>0</h2>
        </div>
        <div className="logo">
          <IoStatsChart />
        </div>
      </div>

      <div className="analytic">
        <div className="content">
          <h5>No. Of Test Given</h5>
          <h2>0</h2>
        </div>
        <div className="logo">
          <BiGroup />
        </div>
      </div>

      <div className="analytic ">
        <div className="content">
          <h5>Accuracy</h5>
          <h2>0</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
  border-radius: 1rem;
  background-color: #212121;
  color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    background: rgba(0, 0, 0, 0.34);

    
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);


    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      

      // background: rgb(213,177,33);
      // background: linear-gradient(90deg, rgba(248, 213, 76, 0.948), rgb(241, 42, 194));


      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;