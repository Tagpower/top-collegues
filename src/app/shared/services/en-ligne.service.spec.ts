import { TestBed, inject } from '@angular/core/testing';

import { EnLigneService } from './en-ligne.service';

describe('EnLigneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnLigneService]
    });
  });

  it('should be created', inject([EnLigneService], (service: EnLigneService) => {
    expect(service).toBeTruthy();
  }));
});
