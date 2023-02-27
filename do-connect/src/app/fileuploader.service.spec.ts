import { TestBed } from '@angular/core/testing';

import { FileUploadService } from './fileuploader.service';

describe('FileuploaderService', () => {
  let service: FileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
