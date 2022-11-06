import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={avatarImage} alt="" />
      </div>
      <div className="title">
        <h2>lovkesh patel</h2>
        <h5>
          <HiOutlineLocationMarker /> India, Delhi
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Present</h5>
          <h3>0</h3>
        </div>
      
        <div className="container">
          <h5>Absent</h5>
          <h3>0</h3>
        </div>
        <div className="container">
          <h5>No. of Tests</h5>
          <h3>0</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background: rgba(0, 0, 0, 0.14);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
padding:10px;


  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: black;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;