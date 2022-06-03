import { NumberSymbol } from '@angular/common';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("","","","")).toBeTruthy();
  });
});
