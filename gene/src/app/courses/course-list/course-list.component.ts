import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../service/core/core.service';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { fadeInAnimation } from "../../core/route-animation/route.animation";
import * as _ from 'lodash';

@Component({
   selector: 'ms-course-list',
   templateUrl: './course-list.component.html',
   styleUrls: ['./course-list.component.scss'],
   encapsulation: ViewEncapsulation.None,
   host: {
      "[@fadeInAnimation]": 'true'
   },
   animations: [ fadeInAnimation ]    
})

export class CourseListComponent implements OnInit {

   jsonResponse : any = [];
   title = 'silat-database';
   datalist: any;
   filteredList: any;
   belt: string;
   description: string;
   family: string;
   stripe: number;
   technique: string;
   filters = {};
   image_url: string;

   constructor( private pageTitleService : PageTitleService, 
                private translate : TranslateService,
                private coreService : CoreService) { }

   ngOnInit() {
      this.pageTitleService.setTitle("Course List");
      this.getCourses();
   }

   /**
     * getCourses method is used to get the courses list.
     */
   getCourses(){
      this.coreService.getCourses().valueChanges().subscribe( data => {
         //this.datalist = data;
         this.filters['stripe'] = val => val == 1
         this.filteredList = _.filter(data, _.conforms(this.filters) )
         this.image_url = this.GetVimeoIDbyUrl('https://vimeo.com/326008718');
      })
   }

   /**
     * getCoursesByPopularity method is used to get the popularity of courses.
     */
   getCoursesByPopularity(type) {
      let course = []; 
      if(this.jsonResponse.courses && this.jsonResponse.courses.length>0) 
         {
            for (let list of this.jsonResponse.courses){
               if(list.popular == type){
                  course.push(list);
               }
            }
            return course;
         }
   }

   GetVimeoIDbyUrl(url:string) {
      var thumbnail_url = "";
      var request = new XMLHttpRequest();
      request.open('GET', 'https://vimeo.com/api/oembed.json?url='+url , false);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var response = JSON.parse(request.responseText);
          if(response.thumbnail_url) {
            thumbnail_url = response.thumbnail_url;
          }
        }
      };
      request.send();
      return thumbnail_url;
    }
}
