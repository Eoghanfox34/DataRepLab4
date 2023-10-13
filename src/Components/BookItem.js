    function BookItem(props){
        return(
            <div>
                {/** Return book information */}
                <div class="card">
                <div class="card-body">
                    <h3>{props.myBook.title}</h3>
                </div>
                </div> 
                <p>ISBN: {props.myBook.isbn}</p>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p>
            </div>
        );
    }

    //export the "BookItem" component so that it can be used by other parts of the application
    export default BookItem;