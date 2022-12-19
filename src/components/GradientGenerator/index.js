import {Component} from 'react'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionHead,
  DirectionItem,
  TotalColorContainer,
  ColorContainer,
  CustomeInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirectionValue: gradientDirectionsList[0].value,
    toColor: '#8ae323',
    fromColor: ' #014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onGenerate = () => {
    const {activeDirectionValue, toColor, fromColor} = this.state
    this.setState({
      gradientValue: `to ${activeDirectionValue},${fromColor},${toColor}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeDirection = direction => {
    this.setState({activeDirectionValue: direction})
  }

  render() {
    const {activeDirectionValue, toColor, fromColor, gradientValue} = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionHead>Choose Direction</DirectionHead>
          <DirectionItem>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientDetails={eachItem}
                onChangeDirection={this.onChangeDirection}
                isActive={activeDirectionValue === eachItem.value}
              />
            ))}
          </DirectionItem>
          <DirectionHead>Pick the Colors</DirectionHead>
          <TotalColorContainer>
            <ColorContainer>
              <DirectionHead>{fromColor}</DirectionHead>
              <CustomeInput
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </ColorContainer>
            <ColorContainer>
              <DirectionHead>{toColor}</DirectionHead>
              <CustomeInput
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </ColorContainer>
          </TotalColorContainer>
          <GenerateButton onClick={this.onGenerate} type="button">
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
