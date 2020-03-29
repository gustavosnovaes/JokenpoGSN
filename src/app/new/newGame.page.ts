import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './newGame.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewGamePage implements OnInit {
  private router: any;
  public page: string;
  public hasMessage: boolean;
  public message: string;

  public gameData: any;
  public player1Victories: number;
  public player2Victories: number;
  private player1Opt: number;
  private player2Opt: number;

  public player1Data: any;
  public player2Data: any;

  constructor(private activatedRoute: ActivatedRoute, router: Router) {
     this.router = router;
     //REMOVER
     this.gameData = {
         	player1: "Computer",
         	player2: "Player",
         	gameTurns: 3
     }

     this.activatedRoute.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.gameData = this.router.getCurrentNavigation().extras.state;
          }
     });
  }

  ngOnInit() {
    this.page = "Jokenpo Gustavo Novaes";

    this.player1Data = {
    	victories: 0,
    	option: 0,
    	current: "/assets/img/none.png"
    };

	this.player2Data = {
		victories: 0,
		option: 0,
		current: "/assets/img/none.png"
    };
  }

  player1Turn() {
    const opt = Math.floor(Math.random() * (4 - 1)) + 1;
  	console.log("player1 jogou " + opt);
  	this.player1Data.option=opt;
    this.player1Data.current=this.getOptionImage(opt, 1);
  }

  player2Turn(opt: number) {
    	this.player2Data.option=opt;
    	this.player2Data.current=this.getOptionImage(opt, 2);
    	this.player1Turn();
    	this.checkWinner();
  }

  checkWinner() {
  	const opt1=this.player1Data.option;
  	const opt2=this.player2Data.option;
  	let gamePlayerMaxPoints = Math.floor(this.gameData.gameTurns / 2) + 1;

  	if (opt1==opt2) {
		this.hasMessage=true;
		this.message="Oops! Empatou";
  	} else if ((opt1==1 && opt2==3) || (opt1==2 && opt2==1) || (opt1==3 && opt2==2)){
  		this.hasMessage=true;
    	this.message="Oops! Não foi dessa vez";
    	this.player1Data.victories++;
  	} else {
		this.hasMessage=true;
		this.message="Parabéns! "+this.gameData.player2;
		this.player2Data.victories++;
  	}

//TODO virar um alerta/modal
	if (this.player1Data.victories==gamePlayerMaxPoints){
		this.hasMessage=true;
        this.message="Oops! "+this.gameData.player2+" perdeste para o "+this.gameData.player1+"? ;-P";
        this.ngOnInit();
	}
	if (this.player1Data.victories==gamePlayerMaxPoints){
		this.hasMessage=true;
		this.message="Parabéns "+this.gameData.player2+"! vê consegue ganhar do "+this.gameData.player1+" dente de leite!";
		this.ngOnInit();
	}

  }

  getOptionImage(opt: number, playerId: number): string {
  	switch(opt) {
       case 1: {
          return "/assets/img/rock-p" + playerId+".png";
          break;
       }
       case 2: {
          return "/assets/img/paper-p" + playerId+".png";
          break;
       }
	   case 3: {
		 return "/assets/img/scissors-p" + playerId+".png";
		 break;
	   }
       default: {
          return "/assets/img/none.png";
          break;
       }
    }
  }
}
