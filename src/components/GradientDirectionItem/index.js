// Write your code here
import {GradientDirectionContainer, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, onChangeDirection, isActive} = props
  const {value, displayText} = gradientDetails

  const onClickDirectionButton = () => {
    onChangeDirection(value)
  }

  return (
    <GradientDirectionContainer>
      <DirectionItem
        type="button"
        isActive={isActive}
        onClick={onClickDirectionButton}
      >
        {displayText}
      </DirectionItem>
    </GradientDirectionContainer>
  )
}
export default GradientDirectionItem
