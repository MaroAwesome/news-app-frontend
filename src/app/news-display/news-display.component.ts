import { Component, OnInit } from "@angular/core";
import { RouterLinkActive, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { MatSliderChange } from "@angular/material/slider";

@Component({
  selector: "app-news-display",
  templateUrl: "./news-display.component.html",
  styleUrls: ["./news-display.component.scss"]
})
export class NewsDisplayComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  public news;
  public fontSize = 20;
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    let id = this.route.snapshot.params.id;

    this.http.get("/api/get/" + id).subscribe(res => {
      this.news = res;
    });
  }
  onInputChange(event: MatSliderChange) {
    this.fontSize = event.value;
  }
}
