// Byimaan

export interface ImageTS {
    id: string
    url: string
}

export interface ProductTS {
    id: string
    name: string
    price: string
    isFeatured: boolean
    isArchieved: boolean
    colorId: string
    images: ImageTS[]
    categoryId: string
}

export interface BillboardTS {
    id: string;
    label: string;
    storeId: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

export interface CategoryTS {
    id: string
    name: string
    billboard: BillboardTS
    products: ProductTS[]
}
