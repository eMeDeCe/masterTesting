import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent as Confirm } from './confirmation-dialog.component';

describe('Confirmation Dialogo component specs', () => {
  it('debe mostrar un dialogo con un titulo', () => {
    // Arrange
    const labelProps = {
      closeButton: 'test close button',
      acceptButton: 'test acept button',
    };

    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: labelProps,
    };

    // Act
    render(<Confirm {...props} />);
    const titleElement = screen.getByText(props.title);
    const labelClose = screen.getByText(props.labels.closeButton);
    const labelAccep = screen.getByText(props.labels.acceptButton);
    const buttonAceptElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });
    const buttonCloseElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    userEvent.click(buttonAceptElement);
    userEvent.click(buttonCloseElement);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(labelClose).toBeInTheDocument();
    expect(labelAccep).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
