import { Modal } from 'bootstrap'
import React, { useContext, useState } from 'react'
import { context } from '../../context'
import { IInputProps } from '../../types'
import './Input.css'

export const Input = (props: IInputProps) => {
  const [value, setValue] = useState('')
  const { placeholder, isSearch } = props

  const { setSearchValue, inputValue, setInputValue, addNewTask, loading } =
    useContext(context)
  const [clicked, setClicked] = useState(false)

  const toggleEffect = () => {
    setClicked(true)
  }

  const resetEffect = () => {
    setClicked(false)
  }

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setValue(event.target.value)
    setInputValue!(event.target.value)
  }

  const handleBtnSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (setSearchValue) {
      event.preventDefault()
      setSearchValue(inputValue!)
    }
  }

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      if (isSearch) return setSearchValue!(inputValue!)
      if (inputValue!.length > 5) {
        setValue('')
        addNewTask!()
        return
      }
      alert('Ingrese mas de 5 letras')
    }
  }

  return (
    <>
      <div className={`inputContainer ${clicked ? 'mouseOver' : ''} `}>
        <input
          onFocus={toggleEffect}
          onBlur={resetEffect}
          type="text"
          className="input"
          placeholder={placeholder}
          onChange={onChangeValue}
          onKeyPress={onPressEnter}
          disabled={loading}
          value={value}
        />
        {isSearch ? (
          <button type="button" className="btnSearch" onClick={handleBtnSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
