import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Category')
export class CategoryDTO {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  slug: string
}
