import { ApiProperty } from '@nestjs/swagger'
export class Product {
    @ApiProperty()
    id: number

    @ApiProperty()
    name : LocalDescription

    @ApiProperty()
    description: LocalDescription

    @ApiProperty()
    handle: LocalDescription

    @ApiProperty()
    attributes: LocalDescription[]

    @ApiProperty()
    published: boolean

    @ApiProperty()
    free_shipping: boolean

    @ApiProperty()
    requires_shipping: boolean

    @ApiProperty()
    canonical_url: string

    @ApiProperty()
    video_url: string

    @ApiProperty()
    seo_title: LocalDescription

    @ApiProperty()
    seo_description: LocalDescription

    @ApiProperty()
    brand: string | LocalDescription

    @ApiProperty()
    created_at: string

    @ApiProperty()
    updated_at: string
    
    @ApiProperty()
    variants: Variant[]

    @ApiProperty()
    tags: string
    
    @ApiProperty()
    images: string[]

    @ApiProperty()
    categories: Category[]
}

interface LocalDescription {
    [language:string]: string
}

interface Variant {
    id: number,
    image_id:string,
    product_id:number,
    position:number,
    price:string,
    compare_at_price:string,
    promotional_price:string,
    stock_management:boolean,
    stock:number,
    weight:string,
    width:string,
    height:string,
    depth:string,
    sku:string,
    values:object[],
    barcode:string,
    mpn:string,
    age_group:string,
    gender:string,
    created_at:string,
    updated_at:string
}

interface Category{
    id: number
    name: LocalDescription
    description: LocalDescription
    handle: LocalDescription
    parent: any
    subcategories: object[]
    seo_title: LocalDescription
    seo_description: LocalDescription
    google_shopping_category: any
    created_at: string
    updated_at: string
}
