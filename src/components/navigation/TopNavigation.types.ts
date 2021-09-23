import { ReactNode } from 'react';

export interface TopNavigationProps {
  leftButton?: boolean
  leftButtonLabel?: string
  leftButtonOnPress?: () => void
  leftButtonIcon?: ReactNode
  title: string
  rightButton?: boolean
  rightButtonLabel?: string
  rightButtonTestID?: string
  rightButtonOnPress?: () => void
  rightButtonIcon?: ReactNode
}
