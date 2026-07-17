import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { RegisterPage } from './RegisterPage'

describe('RegisterPage accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<RegisterPage />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
