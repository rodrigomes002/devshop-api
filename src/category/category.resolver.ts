import { CategoryMapper } from './category.mapper'
import { CategoryService } from './category.service'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryDTO } from './dto/category'
import { CategoryCreateInput } from './dto/category-create.input'

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
    return this.categoryService.create(CategoryMapper.toEntity(input))
  }

  @Mutation(returns => Boolean, { name: 'deleteCategory' })
  async deleteCategory(@Args('id') input: string): Promise<boolean> {
    return this.categoryService.delete(input)
  }
}
