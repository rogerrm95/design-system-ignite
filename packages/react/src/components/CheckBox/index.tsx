import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
