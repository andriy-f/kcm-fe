import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <h1>Welcome to K Contact Manager Sample App</h1>
        <p>
            This is demo Universal application with React, Redux and separate back-end. Also it features Material Design.
        </p>
        <p>
            Main functionality is available through Menu (opened with button in top-left corner) -> <Link to ="/contacts">Contacts.</Link>
        </p>
        <p>
            You can also "Add to Home screen" via browser menu so this app will behave almost like native on your smartphone or tablet.
        </p>
    </div>
)