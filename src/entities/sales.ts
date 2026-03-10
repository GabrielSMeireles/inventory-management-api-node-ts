import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";
@Entity("sales")
export class Sales {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    date!: Date;

    @Column()
    description!: string;

    @Column()
    product!: string;

    @Column()
    quantity!: number;

    @Column()
    total!: number;

    @Column()
    client!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}
