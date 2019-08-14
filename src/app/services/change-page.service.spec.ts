import { TestBed } from '@angular/core/testing';

import { ChangePageService } from './change-page.service';

describe('ChangePageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangePageService = TestBed.get(ChangePageService);
    expect(service).toBeTruthy();
  });
});
