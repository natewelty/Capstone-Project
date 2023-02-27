import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'app/fileuploader.service';

@Component({
  selector: 'app-fileuploadcomponent',
  templateUrl: './fileuploadcomponent.component.html',
  styleUrls: ['./fileuploadcomponent.component.css']
})
export class FileuploadcomponentComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  @Output() newFileUploadEvent = new EventEmitter<string>();
  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) { }
  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.newFileUploadEvent.emit(this.message);
              this.fileInfos = this.uploadService.getFiles();
              console.log(this.fileInfos);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

}

