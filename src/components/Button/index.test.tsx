import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Button } from '.'

describe('Button', () => {
  test('should render button', () => {
    const { getByText } = render(<Button />)
    expect(getByText('Click me')).toBeInTheDocument()
  })
})
