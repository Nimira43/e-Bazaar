import { Form, Link, useLoaderData } from 'react-router-dom'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { type ProductsResponseWithParams } from '../utils'

const Filters = () => {
  const loaderData = useLoaderData() as Partial<ProductsResponseWithParams>
  const { meta, params = {} } = loaderData
  const { search = '' } = params

  // const {meta, params} = useLoaderData() as 
  // ProductsResponseWithParams
  // console.log(useLoaderData())
  // const { search } = params

  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <div className='mb-2'>
        <Label htmlFor='search'>Search Products</Label> 
        <Input
          id='search'
          name='search'
          type='text'
          defaultValue={search}
        />
      </div>
      <Button
        type='submit'
        size='sm'
        className='self-end mb-2 uppercase'
      >
        Search
      </Button>
      <Button
        type='button'
        asChild
        size='sm'
        variant='outline'
        className='self-end mb-2 uppercase'
      >
        <Link to='/products'>Reset</Link>
      </Button>
    </Form>
  )
}

export default Filters
