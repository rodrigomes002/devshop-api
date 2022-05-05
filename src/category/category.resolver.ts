import { CategoryService } from './category.service';
import { Query, Resolver } from '@nestjs/graphql'
import { Category } from './dto/category'

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService){}
  @Query(returns => [Category], { name: 'getAllCategories' })
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryService.findAll()
  }
}
