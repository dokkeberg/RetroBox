import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CardType } from '@prisma/client';

export class UpdateCardDto {
    @ApiProperty()
    text: string;
    @ApiProperty()
    type: CardType;
}
