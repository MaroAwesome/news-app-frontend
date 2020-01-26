import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListAllComponent } from "./list-all/list-all.component";
import { NewsDisplayComponent } from "./news-display/news-display.component";

const routes: Routes = [
  { path: "", component: ListAllComponent, pathMatch: "full" },
  { path: "news/:id", component: NewsDisplayComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
