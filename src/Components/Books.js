    import BookItem from "./BookItem";

    function Books(props){

        //Creates a new function that will return the elements from BookItem
        return props.myBooks.map(
            (book)=>{
                return <BookItem myBook ={book}></BookItem>            
            }       
        )

    }

    //export the "Books" component so that it can be used by other parts of the application
    export default Books;

