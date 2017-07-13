import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: "sortAmount",
  pure: false
})
export class SortAmountPipe implements PipeTransform {

  transform(input: Project[], currentTotal){
    var output: Project[] = [];
    if(currentTotal === "underAmount") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].current <= 2000) {
          output.push(input[i]);
        }
      }
    return output;
  } else if (currentTotal === "overAmount"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].current > 2000) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}
}
