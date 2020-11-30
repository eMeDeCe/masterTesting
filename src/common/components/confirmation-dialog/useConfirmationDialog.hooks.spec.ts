import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('## test 1: isOpen', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog;
    });
    // Assert
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
  it('## test 2: itemToDelete', () => {
    // Arrange
    const initialItemToDelete: Lookup = {
      id: 'newId',
      name: 'newName',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(initialItemToDelete);
    });
    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: 'newId',
      name: 'newName',
    });
  });
});
