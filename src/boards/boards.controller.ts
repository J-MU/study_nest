import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import {BoardsService} from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {

    constructor(private boardService:BoardsService){}

    // @Get('/')
    // getAllBoards():Board[]{
    //     return this.boardService.getAllBoards();
    // }


    // @Get('/:id')
    // getBoardById(@Param('id') id:string):Board{

    //     return this.boardService.getBoardById(id);
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() CreateBoardDto:CreateBoardDto
    //     ):Board{
    //     return this.boardService.createBoard(CreateBoardDto);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id:string,
    //     @Body('status',BoardStatusValidationPipe) status:BoardStatus
    // ){
    //     return this.boardService.updateBoardStatus(id,status);
    // }

    // @Delete('/:id')
    // deleteBoardById(@Param('id') id:string):void {
    //     this.boardService.deletBoardById(id);
    // }
}
