import React from 'react';
import styles from './UrlInput.css'

const UrlInput = ({onChange, url, onSubmit, body}) => {
  return (
  <>
   <form onSubmit={onSubmit} className={styles.urlInput}>
     <div>
      <input type='text' onChange={onChange} value={url} name='url' placeholder='enter api url here' required/>
     </div>
     <section>
       <div>
        <label>
          GET
         <input type='radio' id='get' value='GET' name='method' onChange={onChange}/>
        </label>
        <label>
          PUT
         <input type='radio' id='put' value='PUT' name='method' onChange={onChange}/>
        </label>
        <label>
          DELETE
         <input type='radio' id='delete' value='DELETE' name='method' onChange={onChange}/>
        </label>
        <label>
          POST
         <input type='radio' id='post' value='POST' name='method' onChange={onChange}/>
        </label>
       </div>
       <section>
         <input type='text' value={body} name='body' onChange={onChange} id='jsonEntry' placeholder='enter json body text here'/>
       </section>
       <button>Submit</button>
     </section>
   </form>
  </>
  )
}

export default UrlInput;