import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {

  displayedColumns: string[] = ['dateMatch', 'totalTurns', 'turnsUsed', 'result'];

  matchHistory;

  get MatchHistory(): string{
    return JSON.parse(localStorage.getItem('score'));
  }


  constructor() {

    this.matchHistory = this.MatchHistory;

  }

  ngOnInit(): void {
    this.showAllMatches();
  }

  // tslint:disable-next-line:typedef
  showAllMatches(){

  }

}
