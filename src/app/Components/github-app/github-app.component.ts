import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit{
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;


  constructor (private apiService:ApiService) {}

   public searchUser (){
   // to get the github profile
   this.apiService.getProfile(this.githubUserQuery).subscribe((data: any) => {
    this.githubProfile = data;
       }, (error: string) => {

    this.errorMessage= error;
   });

  // get the github repos
this.apiService.getRepos(this.githubUserQuery).subscribe((data) => {
  this.githubRepos = data;
 },

     (error) => {
  this.errorMessage = error;
 });

}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
