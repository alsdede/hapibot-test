import React from 'react'
import {screen} from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Status from '.'

describe('<Status />', () => {
  it('should render the Status', () => {
    renderWithTheme(<Status value="23k" title="Likes"/>)
    expect(screen.getByText( /likes /i)).toBeInTheDocument()
  })
})
