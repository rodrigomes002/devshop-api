import { CategoryService } from './category.service'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryDTO } from './dto/category'
import { CategoryCreateInput } from './dto/category-create.input'
import { Category } from './category.entity'

@Resolver(of => CategoryDTO)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [CategoryDTO], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryDTO[]> {
    return await this.categoryService.findAll()
  }

  @Mutation(returns => CategoryDTO, { name: 'createCategory' })
  async createCategory(
    @Args('input') input: CategoryCreateInput
  ): Promise<CategoryDTO> {
    const categoryEntity = new Category()
    categoryEntity.name = input.name
    categoryEntity.slug = input.slug
    return this.categoryService.create(categoryEntity)
  }
}
