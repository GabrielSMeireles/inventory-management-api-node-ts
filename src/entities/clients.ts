import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";
@Entity("clients")
export class Client {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;  

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    address!: string;

    @Column()
    neighbor!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}
