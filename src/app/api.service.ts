import { environment } from '../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })

export class ApiService {

    constructor(private httpClient: HttpClient, private router: Router) { }

    uploadExcel(file: File) {
        const uploadData = new FormData();
        uploadData.append("file", file);
        this.httpClient
            .post<{ message: string; }>(
                environment.adminUrl + "api/url/excelImport",
                uploadData
            ).subscribe(response => {

            })
    }
    getPlayLists() {
        return this.httpClient.get(environment.adminUrl + "api/Url/getUrls");
    }
}