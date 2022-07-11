export interface Product {
    id: number
    name : LocalDescription
    description: LocalDescription
    handle: LocalDescription
    attributes: LocalDescription[]
    published: boolean
    free_shipping: boolean
    requires_shipping: boolean
    canonical_url: string
    video_url: string
    seo_title: LocalDescription
    seo_description: LocalDescription
    brand: string | LocalDescription
    created_at: string
    updated_at: string
    variants: Variant[]
    tags: string
    images: string[]
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
