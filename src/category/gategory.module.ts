import { CategoryResolver } from './category.resolver'
import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'

@Module({
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
