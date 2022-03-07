import React, { useState } from 'react'
import { ITodoSearchProps } from '../../types'
import { Input } from '../Input'

export const TodoSearch = ({
  searchValue,
  setSearchValue,
}: ITodoSearchProps) => {
  return (
    <>
      <Input
        placeholder="Search.."
        isSearch={true}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </>
  )
}
