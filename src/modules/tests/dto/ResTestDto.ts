import { Exclude, Expose } from "class-transformer";

export class ResTestDto {
    // (1)
    @Exclude() private readonly _id: number;
    @Exclude() private readonly _firstName: string;
    @Exclude() private readonly _lastName: string;
  
    constructor() {
    }
  
    // @ApiProperty()
    @Expose() // (3)
    get id(): number {
      return this._id;
    }
  
    // @ApiProperty()
    @Expose()
    get firstName(): string {
      return this._firstName;
    }
  
    // @ApiProperty()
    @Expose()
    get lastName(): string {
      return this._lastName;
    }
  }