import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from './../playlist.model';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  form: FormGroup;
  private playlists: Playlist[] = [];
  isPlaylist = false;
  message = 'Loading...';
  constructor(
    public apiService: ApiService
  ) {
    this.apiService.getPlayLists().subscribe((res: Playlist[]) => {
      console.log(res)
      this.playlists = res;
      this.isPlaylist = true;
    }, err => {
      console.log(err)
      this.isPlaylist = false;
      if (err.error == 'noDataFound') {
        this.message = 'No Data Found';
      } else {
        this.message = 'Failed to load data';
      }
    });
  }


  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    this.apiService.uploadExcel(this.form.value.image)
  }
}
