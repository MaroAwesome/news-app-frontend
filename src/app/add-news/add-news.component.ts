import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { NewsAPIsService } from "../news-apis.service";

@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.component.html",
  styleUrls: ["./add-news.component.scss"]
})
export class AddNewsComponent implements OnInit {
  public news: any = {};
  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddNewsComponent>,
    private newService: NewsAPIsService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      poster: new FormControl()
    });
  }
  async onchange() {
    console.log(this.news);
    // converting file to b64
  }
  toBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
    });
  }
  async onSubmit() {
    if (this.form.valid) {
      this.news = this.form.value;
      this.news.poster = await this.toBase64(this.form.value.poster.files[0]);

      this.newService.insertNews(this.news).subscribe(res => {
        this.closeDialog(true);
      });
    }
  }
  closeDialog(submitted) {
    this.dialogRef.close(submitted);
  }
}
