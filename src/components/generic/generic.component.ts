import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class GenericComponent implements OnInit, OnDestroy {

  constructor(
    protected router: Router,
    protected location: Location,
    protected translateService: TranslateService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.queryParams = navigation?.extras;
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

  public navigateToUrl(url: string, routeParams: any = {}): void {
    this.router.navigate([`${this.translateService.currentLang}/${url}`], routeParams);
  }

  public navigateBack(): void {
    this.location.back();
  }

  protected queryParams: any;
}