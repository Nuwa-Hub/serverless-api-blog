import { Field, ObjectType, Int } from 'type-graphql'
import { Post } from './Post'

@ObjectType()
export class User {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(()=>String, { nullable: true })
  email: string

  @Field(()=>String, { nullable: true })
  name: string

  posts?: Post[]

  // skip overwrite 👇
}