import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './utilisateur';
import { Observable } from 'rxjs';
import { Identifiant } from './identifiant';
import { Action } from './action';

const token = localStorage.getItem("token")
const httpOptions = {
  headers: new HttpHeaders(
    {
      'authorization': token ? token : "",
      'Content-Type': 'application/json'
    }),
};

@Injectable({
  providedIn: 'root'
})
export class GreenStockService {

  urlBase: String = "https://projet-api-dev3-cb.herokuapp.com/"

  constructor(private http: HttpClient) { }

  connexion(identifiant:Identifiant): Observable<any> {
    return this.http.post<string>(this.urlBase + "connexion", identifiant, httpOptions);
  }

  obtenirTousLesUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.urlBase + "utilisateurs");
  }

  obtenirUtilisateurParId(_id: String): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.urlBase + "utilisateurs/" + _id);
  }

  ajouterUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.post<string>(this.urlBase + "utilisateurs", utilisateur, httpOptions);
  }

  supprimerUtilisateur(_id?: string): Observable<any> {
    return this.http.delete<any>(this.urlBase + "utilisateurs/" + _id, httpOptions);
  }

  obtenirTousLesActions(): Observable<Action[]> {
    return this.http.get<Action[]>(this.urlBase + "actions", httpOptions);
  }

  obtenirActionParId(_id: String): Observable<any> {
    return this.http.get<any>(this.urlBase + "actions/" + _id, httpOptions);
  }
}
