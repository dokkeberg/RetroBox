import { ApiProperty } from "@nestjs/swagger";
import { SessionState } from "@prisma/client";

export class CreateSessionDto {
    @ApiProperty()
    state: SessionState;
    @ApiProperty()
    teamId: number;
}

