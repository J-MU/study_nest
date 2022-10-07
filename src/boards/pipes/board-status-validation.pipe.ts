import {BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform{
    readonly StatusOption=[
        BoardStatus.PUBLIC,
        BoardStatus.PRIVATE
    ]
    
    
    transform(value: any) {
        value=value.toUpperCase();

        if(!this.isStautsValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`)
        }

        return value;
    }

    private isStautsValid(status){

        const index=this.StatusOption.indexOf(status);

        return index !==-1;
    }


}