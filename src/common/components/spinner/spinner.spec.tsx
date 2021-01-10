import * as React from 'react';
import { render } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

describe('SayHello component specs', () => {
  it('TEST 1 SPINNER: render correctly Spinner component', () => {
    // Arrange
    // Act
    const { asFragment } = render(<SpinnerComponent />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
