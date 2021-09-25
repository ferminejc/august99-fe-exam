import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SpacexService } from "../core/services/spacex.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  isLoading = false;
  launches: any[] = [];
  data: any[] = [];
  sum = 10;
  direction = "";

  form = this.fb.group({
    search: [null],
  });

  constructor(private _spacexService: SpacexService, private fb: FormBuilder) {
    this.isLoading = true;
    this._spacexService.getCapsules().subscribe((data) => {
      this.data = data;

      this.isLoading = false;
      this.appendItems(0, this.sum);
    });
  }

  get search(): any {
    return this.form.get("search");
  }

  ngOnInit() {}

  toggle(i) {
    this.launches[i].isShow = !this.launches[i].isShow;
  }

  onScrollDown(ev: any) {
    const start = this.sum;
    this.sum += 10;
    this.appendItems(start, this.sum);
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  addItems(startIndex?, endIndex?, _method?) {
    this.isLoading = true;
    if (this.sum <= this.data.length) {
      for (let i = startIndex; i < this.sum; ++i) {
        this.launches[_method](this.data[i]);
      }
    }
    this.isLoading = false;
  }
}
