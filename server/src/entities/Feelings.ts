import { Entity, PrimaryKey, Property } from "mikro-orm";

@Entity()
export class Feelings {
    @PrimaryKey()
    id: number;

    @Property()
    feeling!: string;

    @Property({ type: "date" })
    datum = new Date();
}
