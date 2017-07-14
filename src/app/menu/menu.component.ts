import { Component, OnInit , ElementRef} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from '../app.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    
  }

  ngOnInit() {
        this.myForm = new FormGroup({
            'name': new FormControl('',[Validators.required, Validators.minLength(2)]),
            'surname': new FormControl('',[Validators.required, Validators.minLength(2)]),
            'message': new FormControl('',[Validators.required, Validators.minLength(2)]),
        });
  
  }
     /* onSubmit(form: FormGroup) {
        
        console.log('Valid?', form.valid);
        console.log(form.value);
        

    }*/

    onSubmit({ value, valid }: { value: FormGroup, valid: boolean }) {
    console.log(value, valid);
  }
      hideDiv(div){
        console.log(div);
       
    }
}  