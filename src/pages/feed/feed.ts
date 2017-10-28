import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
  MoovieProvider]
})
export class FeedPage {
  public variavel = "valor";
 
  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams, 
	private movieProvider: MoovieProvider){
  
  }
	public func():void{
		alert("Minha função");
	}
  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
		data=>{
				console.log(data);
		}, error=>{
			console.log(error);
		}
	)
  }

}
