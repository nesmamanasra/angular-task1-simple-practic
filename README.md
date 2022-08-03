# angular-task1-simple-practice-PITA
# Getting Started with Create Angular App
This task was created of typescript and HTML

# Available Scripts :
In the task directory, you can follow this steps:
- install angular 
- bulit fisrt your app 
- run this app 
- in app folder you can see this file : 
  - app.component.ts
  - app.component.html
  ##### Note
  You can copy the code that I uploaded and you can put it in the files I mentioned to you

# learn more 
You can learn more in the Create [Angular App documentation.](https://angular.io/cli)

## What I DO
##### Requirements
- firstly: 
  - create counter and tow buttons, the first button when you click this button, Increases the counter by one , the tow button when you click this button, the counter decreases by one.
- secondly:   
  - write the name and create two buttons, when clicking these buttons, button one: convert the name to uppercase, and  button two: convert the name to lowercase

##### solutions to these requirements
 - Counter task: 
   - HTML
           
           <h1>{{counter }}</h1>
           <button (click)="increment()">click me increment</button>
           <button (click)="decrement()">click me decrement</button>   
           
   - TS
            
            counter = 0;
            increment(){
            this.counter ++ ;
            };
           decrement(){
           this.counter --;
            }
            
            
            
- Name  task: 
   - HTML
         
           <h1>{{name}}</h1>
           <button (click)="UpperCase()">click to UperCase name</button>
           <button (click)="LowerCase()">click toLowerCase name</button>
           
   - TS
            
            name = 'nesma nale manasra';
            UpperCase(){
              this.name.toUpperCase();
            };
            LowerCase(){
              this.name.toLowerCase()
            };


#### Screenshot


![t-ng](https://user-images.githubusercontent.com/52491098/182598256-76da9201-4f77-4dd5-ae73-6a55669621d4.PNG)
