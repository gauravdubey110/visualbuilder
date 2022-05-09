import React from 'react'

const Home = () => {

  return (
    <>
      <div className="container my-3">
        <h1>
          Welcome to Visual Builder
        </h1>
        <p>One stop to create your website using drag and drop functionality</p>
        <p>Using this website you can : -</p>
        <ul>
          <li>Create your website withour coding</li>
          <li>Can get the HTML and CSS code of the required design</li>
          <li>This HTML and CSS files can also be exported as zip file which can be later used in any project</li>
        </ul>
        <h3> Click on this button below to start creating your website </h3>
        <button className="btn btn-secondary my-3" onClick={event => window.location.href = '/editor'}>Create</button>
      </div>

    </>
  )
}

export default Home