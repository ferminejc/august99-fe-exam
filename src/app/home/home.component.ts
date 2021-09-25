import { Component, OnInit } from "@angular/core";
import { SpacexService } from "../core/services/spacex.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  selector: string = ".main-panel";

  onScroll() {
    console.log("scrolled!!");
  }
  constructor(private _spacexService: SpacexService) {}

  ngOnInit() {
    this._spacexService.getCapsules().subscribe((data) => {
      console.log(data);
    });
  }
}
