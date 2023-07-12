import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsArray, ValidateNested, IsNumber, IsNotEmpty } from 'class-validator';

export class Address {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(100)
    uf: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(9)
    country: string;
}

export class Intention {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    name: string;
}

export class Products {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({
        each: true,
    })
    id: number;

    @ApiProperty()
    @IsString({
    each: true,
    })
    @IsNotEmpty({
    each: true,
    })
    @Length(1, 50, {
    each: true,
    })
    title: string;
    @IsNotEmpty({
    each: true,
    })
    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsString({
    each: true,
    })
    @Length(1, 50, {
    each: true,
    })
    @IsNotEmpty({
    each: true,
    })
    category: string;

    @ApiProperty()
    @IsString({
    each: true,
    })
    @Length(1, 255, {
    each: true,
    })
    description: string;
    @IsNotEmpty({
    each: true,
    })
    @ApiProperty()
    @IsString({
    each: true,
    })
    image: string;
}

export class CreateIntentionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    name: string;

    @ApiProperty({ type: Address })
    @ValidateNested({ each: true })
    address: Address;

    @ApiProperty({ type: Intention })
    @ValidateNested({ each: true })
    intention: Intention;

    @ApiProperty({ type: [Products] })
    @IsArray()
    @ValidateNested({ each: true })
    products: Products;
}
