import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-folder',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  public newGameForm: any;
  private router: any;
  private formBuilder: any;
  public page: string;
  public error: boolean;
  public errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, formBuilder: FormBuilder, router: Router) {
    this.router = router;
    this.newGameForm = formBuilder.group({
                             player1: ['John Computer'],
                             player2: ['', Validators.required],
                             gameTurns: ['3', Validators.compose([Validators.min(3), Validators.max(7), Validators.required])],
                        });
  }

  ngOnInit() {
    this.page = "Novo Jogo";
  }

  save() {
  	 //console.log(this.newGameForm.value);
     if(this.validate()) {
     	let { player1, player2, gameTurns } = this.newGameForm.controls;
     	//this.router.navigate(['/newGame/'+ player1.value + "/" + player2.value +"/" + gameTurns.value]);
     	let navigationExtras: NavigationExtras = {
              state: {
                player1: player1.value,
                player2: player2.value,
                gameTurns: gameTurns.value
              }
         };
         this.router.navigate(['new/game/'], navigationExtras);
         this.formReset();
     }
  }

  validate(): boolean {
  	let { player1, player2, gameTurns } = this.newGameForm.controls;
  	this.errorMessage = "";
	if (!this.newGameForm.valid) {
		 if (!player1.valid) {
		   this.error = true;
		   this.errorMessage = "Ops! você não informou o nome do player 1!";
		 } else if (!player2.valid) {
			 this.error = true;
			 this.errorMessage = "Ops! você não informou o nome do player 2!";
			 return false;
         } else if (!gameTurns.valid && gameTurns.value != 3 && gameTurns.value != 5 && gameTurns.value != 7) {
              this.error = true;
              this.errorMessage = "Ops! você só pode escolher 3, 5 ou 7 partidas!";
         }
         return false;
    }
    return true;
  }

  formReset() {
  	let { player1, player2, gameTurns } = this.newGameForm.controls;
 	player2.reset();
  }
}
