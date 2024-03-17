import { User } from '../users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';


@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column("simple-array", { nullable: true })
  images: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column("simple-array", { nullable: true })
  tags: string[];

  @ManyToMany(() => User)
  @JoinTable()
  likedBy: User[];

  get likes(): number {
    return this.likedBy.length;
  }

  @Column({ nullable: true })
  description: string;

  @Column({ default: 0 })
  comments: number;
}
