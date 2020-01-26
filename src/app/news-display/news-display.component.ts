import { Component, OnInit } from "@angular/core";
import { RouterLinkActive, ActivatedRoute } from "@angular/router";
import { MatSliderChange } from "@angular/material/slider";
import { NewsAPIsService } from "../news-apis.service";

@Component({
  selector: "app-news-display",
  templateUrl: "./news-display.component.html",
  styleUrls: ["./news-display.component.scss"]
})
export class NewsDisplayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsAPIsService
  ) {}
  public news;
  public fontSize = 20;
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    let id = this.route.snapshot.params.id;

    this.newsService.getByID(id).subscribe(res => {
      this.news = res;
    });
  }
  onInputChange(event: MatSliderChange) {
    this.fontSize = event.value;
  }
}
