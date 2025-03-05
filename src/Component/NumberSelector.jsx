import styled from "styled-components";

const Numberselector = ({ error,  selectNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectContainer>
      <p className="color">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectContainer>
  );
};

const NumberSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .color{
    color:red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-weight: 700px;
    font-size: 24px;

  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : " white ")};
  color: ${(props) => (!props.isSelected ? "black" : " white ")};
`;

export default Numberselector;
