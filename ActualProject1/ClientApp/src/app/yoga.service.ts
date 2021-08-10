import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { getBaseUrl } from '../main';
import { Pose } from './yoga/Pose';

@Injectable({
  providedIn: 'root'
})
export class YogaService {
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  
  
  callPoseRandom(@Inject('BASE_URL') baseUrl: string): any {
    //this method calls the api from the ASP.net side and returns a random pose from the
    //list of poses. It does not account for difficulty or user skills
    //it returns the observable to be directly passed into the Yoga component to be subscribed there -Troy
    let response =this.http.get<Pose>(baseUrl + 'api/Yoga')
    return response;
  }
}
