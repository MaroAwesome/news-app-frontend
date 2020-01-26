import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { AddNewsComponent } from "../add-news/add-news.component";
import { NewsAPIsService } from "../news-apis.service";

@Component({
  selector: "app-list-all",
  templateUrl: "./list-all.component.html",
  styleUrls: ["./list-all.component.scss"]
})
export class ListAllComponent implements OnInit {
  constructor(public dialog: MatDialog, private newsService: NewsAPIsService) {}
  public news: any = [];
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news = [];
    this.newsService.getAll().subscribe(
      res => {
        console.log(res);
        this.news = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewsComponent, {
      width: "450px"
    });
    dialogRef
      .afterClosed()
      .pipe()
      .subscribe(submitted => {
        submitted ? this.getNews() : null;
      });
  }
}
