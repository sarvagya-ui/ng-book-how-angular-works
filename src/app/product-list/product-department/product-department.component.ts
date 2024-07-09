import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.scss']
})
export class ProductDepartmentComponent implements OnInit {

  @Input() department !: Array<string>;
  hierarchy: string = "";
  constructor() { }

  ngOnInit(): void {
    // console.log(this.department);
    this.hierarchy = this.formatHierarchy(this.department);
  }

  formatHierarchy(input: string[]): string {
    return input.join(" > ");
  }

}
