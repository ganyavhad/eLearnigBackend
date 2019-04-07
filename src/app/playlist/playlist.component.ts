import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {


  playlists = [
    {
      category: 'Programmer',
      subcategory: 'Java',
      channel: 'Durgasoft',
      url: 'https://www.youtube.com/watch?v=eTXd89t8ngI&list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0'
    },
    {
      category: 'Programmer',
      subcategory: 'Python',
      channel: 'Telesko',
      url: 'https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3'
    },
    {
      category: 'Programmer',
      subcategory: 'NodeJs',
      channel: 'The Net Ninja',
      url: 'https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp'
    }
  ]

  constructor() { }


  ngOnInit() {
  }

}
