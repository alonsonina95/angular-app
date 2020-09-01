import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-video',
  templateUrl: './create-new-video.component.html',
  styleUrls: ['./create-new-video.component.scss']
})
export class CreateNewVideoComponent implements OnInit {

  fileToUpload: File = null;
  constructor() { }

  ngOnInit(): void {
  }


  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
}
