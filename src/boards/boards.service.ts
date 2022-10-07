import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {

    
    // createBoard(createdBoardDto:CreateBoardDto){
    //     const {title,description}=createdBoardDto;

    //     const board:Board={
    //         id:uuid(),
    //         title,
    //         description,
    //         status:BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);

    //     return board;
    // }

    // getAllBoards():Board[]{
    //     return this.boards;
    // }

    // getBoardById(id:string){
    //     const foundedBoard=this.boards.find((board)=> board.id===id);

    //     if(!foundedBoard)
    //         throw new NotFoundException(`Can't found Board with id ${id}`);

    //     return foundedBoard;
    // }

    // updateBoardStatus(id: string,status:BoardStatus):Board{
    //     const board:Board=this.getBoardById(id);
    //     board.status=status;

    //     return board;
    // }


    // deletBoardById(id:string):void{
    //     const foundedBoard=this.getBoardById(id);
    //     if(!foundedBoard)
    //         throw new NotFoundException('삭제하려는 board가 없습니다.');

    //     this.boards=this.boards.filter((board)=>board.id!==foundedBoard.id);
    // }
}
