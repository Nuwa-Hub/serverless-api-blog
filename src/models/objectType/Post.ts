import { Field, ObjectType, Int } from 'type-graphql'
import { User } from './User'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field(()=>String, { nullable: true })
  title: string

  @Field(()=>String, { nullable: true })
  content?: string

  @Field(()=>String, { nullable: true })
  published: boolean

  @Field(() => User)
  author: User

  @Field(() => Int)
  authorId: number
}