import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";


export default function Transfers() {
  const transactions = [
    {
      image: avatarImage,
      name: "physics",
      time: "2/6/2022",
      score: "0/0",
    },
    {
      image: avatarImage,
      name: "chemistry",
      time: "2/6/2022",
      score: "0/0",
    },
    {
      image: avatarImage,
      name: "maths",
      time: "2/6/2022",
      score: "0/0",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Past Tests</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.score}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="/">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  
  display: flex;
  flex-direction: column;
  gap: 1rem;

//   background: rgba(0, 0, 0, 0);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(11.3px);
// -webkit-backdrop-filter: blur(11.3px);

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// box-shadow: rgb(38, 57, 77) 0px 20px 30px -20px;
box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

padding:10px;

  .title {
    h2 {
      color: grey;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: pink;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;