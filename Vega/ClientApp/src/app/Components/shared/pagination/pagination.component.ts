import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input('total-items') totalItems;
  @Input('page-size') pageSize = 10;
  @Output('page-changed') pageChanged = new EventEmitter();

  pages: any[];
  currentPage = 1; 

  ngOnChanges(): void {
    this.currentPage = 1;

    const pagesCount = Math.ceil(this.totalItems / this.pageSize);
    this.pages = [];
    for (let i = 1; i <= pagesCount; i++)
      this.pages.push(i);

    //console.log(this);
  }

  changePage(page) {
    
    this.currentPage = page;
    //console.log("changePage",this);
    this.pageChanged.emit(page);
  }

  previous() {
    
    if (this.currentPage === 1)
      return;

    this.currentPage--;
    //console.log("previous", this);
    this.pageChanged.emit(this.currentPage);
  }

  next() {
    if (this.currentPage === this.pages.length)
      return;

    this.currentPage++;
    //console.log("next", this);
    this.pageChanged.emit(this.currentPage);
  }

}
