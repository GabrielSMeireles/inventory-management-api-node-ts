interface ISalesRequest {
    id?: string,
    date: Date,
    description: string,
    product: string,
    quantity: number,
    total: number,
    client: string
}

export { ISalesRequest }