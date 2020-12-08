import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('UseConfirmDialog props', () => {
  it('## test 1: Should false when isOpen it is called', () => {
    // Arrange
    const outcome = false;
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.isOpen;
    });
    // Assert
    expect(result.current.isOpen).toEqual(outcome);
  });
  it('## test 2: Should return empty Lookup when item to delete is colled', () => {
    // Arrange
    const initialEmpty: Lookup = {
      id: '',
      name: '',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.itemToDelete;
    });
    // Assert
    expect(result.current.itemToDelete).toEqual(initialEmpty);
  });

  it('## test 3: Should return item when is called itemToDelete', () => {
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

  it('## test 4: Should return empty item when is called onAccept', () => {
    // Arrange
    const initialEmptyItem: Lookup = {
      id: '',
      name: '',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onAccept();
    });
    // Assert
    expect(result.current.itemToDelete).toEqual(initialEmptyItem);
  });

  it('## test 4: Should return false when onClose is called', () => {
    // Arrange
    const outcome = false;
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });
    // Assert
    expect(result.current.isOpen).toEqual(outcome);
  });

  it('## test 5: Should return true when onOpenDialog isOpen is called  ', () => {
    // Arrange
    const initialItemToOpen: Lookup = {
      id: 'newId',
      name: 'newName',
    };
    const outcome = true;
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(initialItemToOpen);
    });
    // Assert
    expect(result.current.isOpen).toEqual(outcome);
  });

  it('## test 6: Should return itemInitial when setItemToDelete is called', () => {
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
