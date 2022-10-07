import { ApiProperty } from "@nestjs/swagger";
import { CardState, CardType } from "@prisma/client";

export class CreateCardDto {
    @ApiProperty()
    text: string;
    @ApiProperty()
    type: CardType;
    @ApiProperty()
    session: number;
    @ApiProperty()
    user: number;
}
