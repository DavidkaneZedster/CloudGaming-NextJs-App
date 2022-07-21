import Link from "next/link";
import styled from "styled-components";
import { headerBtns } from "../assets/db";

const Button = styled.span`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  font-size: 13px;
  font-weight: 400px;
  transition: 0.4s all ease;
  background-color: ${({ property }) =>
    property === "primary"
      ? "#575DFF"
      : property === "secondary"
      ? "#FF1C6E"
      : property === "outline"
      ? "#181728"
      : ""};
  border: ${({ border }) => (border ? "1px solid #575DFF" : "")};
`;

const HeaderButtons = () => {
  return (
    <>
      {headerBtns.map((item) => {
        return (
          <Link href="/req" key={item.id}>
            <a>
              <Button property={item.property} border={item.border}>
                {item.buttonText}
              </Button>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default HeaderButtons;
