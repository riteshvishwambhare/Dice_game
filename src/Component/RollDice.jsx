import styled from "styled-components"

const RollDice = ({currentDice, roleDice}) => {
 



  return (
    <DiceCointainer>
      <div className="dice" onClick={roleDice}>
      <img src={`/public/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceCointainer>
  )
}

export default RollDice

const DiceCointainer = styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
    p{
      font-size:23px;
      font-weight:500;
    }

    .dice{
      cursor: pointer;
    }
`
