import { Component, OnInit ,ViewChild } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { AgGridAngular } from 'ag-grid-angular'
import { GridOptions, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  @ViewChild('agGrid' ,{static: false})

  agGrid: AgGridAngular

  columnDefs = [
		{
      headerName: 'Collection',
       field: 'Collection', 
       sortable: true ,
       filter:true,
       checkboxSelection: true
      },
		{headerName: 'Price', field: 'Price' , sortable: true ,filter:true , maxWidth: 100  },
		{headerName: 'ProductTitle', field: 'ProductTitle', sortable: true ,filter:true},
    {headerName: 'StyleName', field: 'StyleName', sortable: true ,filter:true},
		{headerName: 'NetQuantity', field: 'NetQuantity', sortable: true ,filter:true ,maxWidth: 100},
		{headerName: 'ProductCode', field: 'ProductCode', sortable: true ,filter:true ,  maxWidth: 100},
    {headerName: 'AvailableSizes', field: 'AvailableSizes', sortable: true ,filter:true},


	];

	rowData:any


  // Pagination
  gridOptions: GridOptions;

  //autoGroupColumnDef;
  //defaultColDef;
  //rowSelection;
  //rowGroupPanelShow; ENV
  //pivotPanelShow;
  pages: number = 5;
  pageSize: number = 10;
  pageNumber: number = 1;
  currentIndex: number = 1;
  pagesIndex: Array<number> = [];
  pageStart: number = 1;
  rowHeight: number;
  headerHeight: number;
  paginationPageSize: number;
  totalPages = 0;
  //paginationNumberFormatter;
  pager: number = 10;
  pagerm: number = 1;
  gridApi: GridApi
  //gridColumnApi;


  constructor(private productService:ProductListService) { }

  ngOnInit(): void {
    this.loadProducts();

  }

  loadProducts(){

    this.productService.getProducts().subscribe((products)=> {
      
      this.rowData=products;
      console.log(this.rowData)
   });

   

}
getSelectionRows(){

  const selectedNodes=this.agGrid.api.getSelectedNodes();
  const selectedData =selectedNodes.map(node=>node.data);
  const selectedDataStringPresentation =selectedData
  .map(node=> node.make + ''+ node.model).join(",");
   alert(`Selected Nodes: ${selectedDataStringPresentation}`);
     
}


}
