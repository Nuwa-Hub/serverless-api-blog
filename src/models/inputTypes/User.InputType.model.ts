import { Field, Int, InputType } from 'type-graphql'

@InputType()
export class UserInputTypeDto {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(()=>String)
  email: string

  @Field(()=>String)
  name: string

}