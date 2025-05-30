import { useLoaderData } from 'react-router-dom'
import { ProductsResponse } from '../utils'
import { useState } from 'react'
import { Button } from './ui/button'
import { IoGridOutline, IoList  } from 'react-icons/io5'
import { Separator } from './ui/separator'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')

  return (
    <>
      <section>
        <div className='flex justify-between items-center mt-8'>
          <h4 className='font-medium text-md'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              onClick={() => setLayout('grid')}
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size='icon'
            >
              <IoGridOutline />
            </Button>
            <Button
              onClick={() => setLayout('list')}
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
            >
              <IoList />
            </Button>
          </div>
        </div>    
        <Separator className='mt-4' />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            No matching product found...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}  
      </div>
    </>
  )
}

export default ProductsContainer
