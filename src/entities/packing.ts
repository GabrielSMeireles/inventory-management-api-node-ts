import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";
@Entity("packing")
export class Packing {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;  

    @Column()
    description!: string;

    @Column()
    material!: string;

    @Column()
    height!: number;

    @Column()
    width!: number;

    @Column()
    length!: number;

    @Column()
    price!: number;

    @Column()
    wheight!: number;

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
