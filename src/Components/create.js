import { useState } from "react";

function Create(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');
    

    {/**
        * Handles form submission.
        * Logs the title, author, and cover URL to the console.
    */}
    const handleSubmit = (e) => {
        e.preventableDefault();

        console.log('Title: '+title,
                    'Author: '+author,
                    'Cover: '+url);
    }

    return(
        <div>
            <h2>Hello from create Component!</h2>
            {/** Displays a form to add a book. 
              The form includes fields for the book title, author, and front page URL.  */}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Front Page Url: </label>
                    <input type="text"
                    className="form-control"
                    value={url}
                    onChange={(e) => { setUrl(e.target.value) }}
                    />

                  <button type="button" class="btn btn-primary">Add Book</button>
                </div>
            </form>
            
        </div>
    )

}
export default Create;