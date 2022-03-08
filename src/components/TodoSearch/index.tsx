import { Input } from '../Input'

export const TodoSearch = () => {
  return (
    <>
      <div className="mb-4">
        <Input
          placeholder="Search.."
          isSearch={true}
          // searchValue={searchValue}
          // setSearchValue={setSearchValue}
        />
      </div>
    </>
  )
}
