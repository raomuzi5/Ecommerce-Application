import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class AppProductComponent implements OnInit {
  public productdataOptions:Array<any> = new Array<any>();
  public productdata:Array<any> = new Array<any>();
  status: boolean = false;
  public searchText: string;
  public selectedColor: string;
  public checkboxesDataList:Array<any> = new Array<any>();
  public checkboxesRating:Array<any> = new Array<any>();
  public selectedCat: any;
  constructor(private modalService: NgbModal) {
    this.checkboxesDataList = [
      {
        id: '1',
        label: 'Accessories',
        isChecked: false
      },
      {
        id: '2',
        label: 'Bag',
        isChecked: false
      },
      {
        id: '3',
        label: 'Showpiece',
        isChecked: false
      }];

      this.checkboxesRating = [
        {
          id: '1',
          value: '5',
          isChecked: false
        },
        {
          id: '2',
          value: '4',
          isChecked: false
        },
        {
          id: '3',
          value: '3',
          isChecked: false
        },
        {
          id: '4',
          value: '2',
          isChecked: false
        },
        {
          id: '5',
          value: '1',
          isChecked: false
        }
      ];

    this.productdataOptions = [
      {
          category: 'Accessories',
          productbard:"PLANTERS",
          productname:"BRONE CANDLE1",
          discountprice:"$25",
          orignalprice: '$47',
          productimg: 'assets/images/ecommerce/1.png',
          color:'red',
          // ratingcount:'zmdi-star text-warning',
          rating: '5'
      },
      {
        category: 'Bag',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE2",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/2.png',
        color:'red',
        // ratingcount:'zmdi-star text-warning',
        rating: '4'
      },
      {
        category: 'Accessories',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE3",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/3.png',
        color:'green',
        // ratingcount:'zmdi-star text-warning',
        rating: '2'
      },
      {
        category: 'Bag',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE4",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/4.png',
        color:'green',
        rating: '1'
      },
      {
          category: 'Showpiece',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE5",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/5.png',
        color:'red',
        rating: '5'
      },
      {
          category: 'Accessories',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE6",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/6.png',
        color:'blue',
        rating: '2'
      },
      {
          category: 'Showpiece',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE7",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/7.png',
        color:'blue',
        rating: '5'
      },
      {
          category: 'test 8',
        productbard:"PLANTERS",
        productname:"testetet",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/8.png',
        color:'red',
        rating: '1'
      },
    ];
  }
  loadProductData(){
    this.productdataOptions = [
      {
          category: 'Accessories',
          productbard:"PLANTERS",
          productname:"BRONE CANDLE1",
          discountprice:"$25",
          orignalprice: '$47',
          productimg: 'assets/images/ecommerce/1.png',
          color:'red',
          rating: '5'
      },
      {
          category: 'Bag',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE2",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/2.png',
        color:'red',
        rating: '4'
      },
      {
          category: 'Accessories',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE3",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/3.png',
        color:'green',
        rating: '2'
      },
      {
          category: 'Bag',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE4",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/4.png',
        color:'green',
        rating: '1'
      },
      {
          category: 'Showpiece',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE5",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/5.png',
        color:'red',
        rating: '5'
      },
      {
          category: 'Accessories',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE6",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/6.png',
        color:'blue',
        rating: '2'
      },
      {
          category: 'Showpiece',
        productbard:"PLANTERS",
        productname:"BRONE CANDLE7",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/7.png',
        color:'blue',
        rating: '5'
      },
      {
          category: 'test 8',
        productbard:"PLANTERS",
        productname:"testetet",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/8.png',
        color:'red',
        rating: '1'
      },
    ];
  }
  ngOnInit() {

  }
  clickEvent(){
    this.status = !this.status;
  }

  public search(text: string) {
    this.loadProductData();
    this.searchText = text;
    this.productdataOptions = this.productdataOptions.filter(proj => (proj.productname.toLowerCase().indexOf(text.toLowerCase()) !== -1) );
  }

  onItemChange(value){
    this.selectedColor = value;
    this.loadProductData();
    if(this.searchText){
      this.productdataOptions = this.productdataOptions.filter(proj => (proj.productname.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) );
    }
    if(this.selectedColor !== 'all'){
      this.productdataOptions = this.productdataOptions.filter(proj => (proj.color === this.selectedColor));
    }
  }

  onChangeCategories(value){

    this.loadProductData();
    if(this.searchText){
      this.productdataOptions = this.productdataOptions.filter(proj => (proj.productname.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) );
    }
    if(this.selectedColor !== 'all'){
      this.productdataOptions = this.productdataOptions.filter(proj => (proj.color === this.selectedColor));
    }
    if(value){
      this.productdataOptions = this.productdataOptions.filter(proj => (proj.category.toLowerCase() === value.toLowerCase() ));
    }
  }

  updateItem(e, type) {
    this.loadProductData();
    this.checkboxesDataList.filter(function(item){
      if(item.id == type.id){
        if(!type.isChecked){
          item.isChecked = true;
        }else{
          item.isChecked = false;
        }
      }
    });

    this.selectedCat = this.checkboxesDataList.filter(opt => opt.isChecked)
              .map(opt => opt.label);

    if(typeof this.selectedCat != 'undefined' && this.selectedCat.length !== 0){
      this.productdataOptions = this.productdataOptions.filter(f => this.selectedCat.includes(f.category));
    }else{
      this.loadProductData();
    }
  }

  filterRatingItem(e, id) {
    this.loadProductData();
    this.checkboxesRating.filter(function(item){
      if(item.id == id){
        if(!item.isChecked){
          item.isChecked = true;
        }else{
          item.isChecked = false;
        }
      }
    });

    this.selectedCat = this.checkboxesRating.filter(opt => opt.isChecked)
              .map(opt => opt.value);
    console.log(this.selectedCat);
    if(typeof this.selectedCat != 'undefined' && this.selectedCat.length !== 0){
      this.productdataOptions = this.productdataOptions.filter(f => this.selectedCat.includes(f.rating));
    }else{
      this.loadProductData();
    }
  }

  findIndexToUpdate(type) {
    return type.id === this;
  }

}
