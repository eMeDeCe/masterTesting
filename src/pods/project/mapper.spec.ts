import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import {
  mapProjectFromApiToVm,
  mapEmployeeSummaryFromApiToVm,
  mapEmployeeSummaryListFromApiToVm,
} from './project.mapper';

describe('mapper specs', () => {
  it('TEST 1 MAPPERS: should return empty Project when it feeds undefined', () => {
    // Arrange
    const projects: apiModel.Project = undefined;
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projects);
    // Assert
    const expectResult = viewModel.createEmptyProject();
    expect(result).toEqual(expectResult);
  });

  it('TEST 2 MAPPERS: should return empty Project when it feeds null', () => {
    // Arrange
    const projects: apiModel.Project = null;
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projects);
    // Assert
    const expectResult = viewModel.createEmptyProject();
    expect(result).toEqual(expectResult);
  });

  it('TEST 3 MAPPERS: should return a project when it feeds project', () => {
    // Arrange
    const projects: apiModel.Project = {
      id: '0',
      name: 'ProjectTest',
      isActive: true,
      comments: 'Comentario',
      externalId: '00000',
      employees: [],
    };
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projects);
    // Assert
    const expectResult: apiModel.Project = {
      id: '0',
      name: 'ProjectTest',
      isActive: true,
      comments: 'Comentario',
      externalId: '00000',
      employees: [],
    };
    expect(result).toEqual(expectResult);
  });

  it('TEST 4 MAPPERS: should return empty emplyees when it feeds undefined', () => {
    // Arrange
    const emplyeesSummary: apiModel.EmployeeSummary[] = undefined;
    // Act
    const result: viewModel.EmployeeSummary[] = mapEmployeeSummaryListFromApiToVm(
      emplyeesSummary
    );
    // Assert
    expect(result).toEqual([]);
  });

  it('TEST 5 MAPPERS: should return empty emplyees when it feeds null', () => {
    // Arrange
    const emplyeesSummary: apiModel.EmployeeSummary[] = null;
    // Act
    const result: viewModel.EmployeeSummary[] = mapEmployeeSummaryListFromApiToVm(
      emplyeesSummary
    );
    // Assert
    expect(result).toEqual([]);
  });

  it('TEST 6 MAPPERS: should return empty emplyees when it feeds empty array', () => {
    // Arrange
    const emplyeesSummary: apiModel.EmployeeSummary[] = [];
    // Act
    const result: viewModel.EmployeeSummary[] = mapEmployeeSummaryListFromApiToVm(
      emplyeesSummary
    );
    // Assert
    expect(result).toEqual([]);
  });

  it('TEST 7 MAPPERS: should return empty emplyees when it feeds array with one item', () => {
    // Arrange
    const emplyeesSummary: apiModel.EmployeeSummary[] = [
      { id: '111', isAssigned: true, employeeName: 'Fulanito de tal' },
    ];
    // Act
    const result: viewModel.EmployeeSummary[] = mapEmployeeSummaryListFromApiToVm(
      emplyeesSummary
    );
    // Assert
    const expectedResult: viewModel.EmployeeSummary[] = [
      {
        id: '111',
        isAssigned: true,
        employeeName: 'Fulanito de tal',
      },
    ];

    expect(result).toEqual(expectedResult);
  });
});
