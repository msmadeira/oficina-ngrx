import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Resident} from "../models/resident.model";

@Injectable()
export class ResidentsService {

  private readonly baseUrl = 'http://academyapi-env.us-west-2.elasticbeanstalk.com';

  constructor(private httpClient: HttpClient) {
  }

  load(): Observable<Resident[]> {
    return this.httpClient
      .get<Resident[]>(
        `${this.baseUrl}/resident`,
      );
  }
}
