import { Component, OnInit, Input } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() title: String = "";

  // code/output filenames
  @Input() file: String = "";

  // Load these from src/assets/code and src/assets/output
  // Parse comments in each file, store them in comments
  code: string = "";
  codeComments: string[] = [];
  codeUrl: string = "";
  output: string = "";
  outputComments: string[] = [];
  outputUrl: string = "";
  
  constructor(private http: HttpClient) {
    this.http.get(this.codeUrl, {responseType: 'text'})
             .subscribe(data => {
              this.code = data
              console.log('result: ', this.code)
             });

    this.http.get(this.outputUrl, {responseType: 'text'})
            .subscribe(data => {
              this.output = data
              console.log('result: ', this.output)
            });
   }

  ngOnInit(): void {
    this.codeUrl = 'assets/code/' + this.file + '.java';
    this.outputUrl = 'assets/output/' + this.file + '.txt';
  }

}
