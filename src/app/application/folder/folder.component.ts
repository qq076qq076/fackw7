import { Component, OnInit, Type, HostListener } from '@angular/core';
import { Computer, FolderMap, Folder } from './folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  constructor() { }
  focusePath = false;
  readonly emptyFolder: Folder = {
    path: '',
    name: '',
    icon: '',
    directory: []
  };
  readonly computer = Computer;
  currentFolder: Folder = Computer;
  pathInput: string = this.currentFolder.path;
  active;

  ngOnInit() {
  }

  getUrlList() {
    return this.currentFolder.path.split('\\').filter(item => item);
  }

  searchPath() {
    this.focusePath = false;
    const folder = this.deepSearch(this.pathInput);
    this.currentFolder = folder || this.emptyFolder;
  }

  getByPath() {

  }

  toggle(folder: Folder) {
    this.currentFolder = folder;
    this.pathInput = folder.path;
  }

  toLast() {
    const pathList = this.currentFolder.path.split('\\');
    pathList.pop();
    const folder = this.deepSearch(pathList.join('\\'));
    if (folder) {
      this.currentFolder = folder;
    } else {
      this.currentFolder = Computer;
    }
  }

  searchFolder() {

  }

  deepSearch(path: string, folderList: Folder[] = FolderMap): Folder | null {
    for (const folder of folderList) {
      if (path === folder.path) {
        return folder;
      } else if (path.indexOf(folder.path) !== -1) {
        return this.deepSearch(path, folder.directory);
      } else {
        return null;
      }
    }
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  @HostListener('document:click') setUnFocus() {
    if (this.focusePath) {
      this.focusePath = false;
    }
  }
}
