import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class User{
    @Column()
    access_token: string

    @Column()
    token_type: string

    @Column()
    scope: string

    @PrimaryColumn()
    user_id: number
}