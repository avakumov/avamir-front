import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import UploadBook from './uploadBook'
import UploadBookSimple from './uploadBookSimple'
import CategoriesBooks from './categoriesBooks'
import Book from './book'
import Loading  from '../../../components/loading/Loading'

const Books = styled.div`
    width: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const ContentBooks = ({ activeMenuItemId, books, loading }) => {
    let filteredBooks = books
    if (activeMenuItemId !== "0") {
        filteredBooks = books.filter(book => book.category === activeMenuItemId)
    } 
    
    if (loading) {
        return (
            <Books className="paper">
                <Loading />
            </Books>
        )
    } else if (activeMenuItemId === '99') {
        return (
            <Books className="paper">
                <UploadBook />
            </Books>
        )
    } else if (activeMenuItemId === '100') {
        return (
            <Books className="paper">
                <CategoriesBooks />
            </Books>
        )
    } else if (filteredBooks && filteredBooks.length === 0 && activeMenuItemId !== '0') {
        return (
            <Books className="paper">
                <UploadBookSimple categoryId={activeMenuItemId}/>
            </Books>
        )
    } else if (filteredBooks && filteredBooks.length === 0 && activeMenuItemId === '0') {
        return (
            <Books className="paper">
                Книг пока нет
            </Books>
        )
    } else {
        return (
            <Books className="paper">
                {filteredBooks.map((book) => <Book key={book._id} book={book} />)}
            </Books>
        )
    }
}

const mapStateToProps = (state) => {
    const { books, loading, activeMenuItemId } = state.books
    return {
        books,
        loading,
        activeMenuItemId
    }
}


const connectedContentBooks = connect(mapStateToProps, null)(ContentBooks)
export default connectedContentBooks
