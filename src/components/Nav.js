var React = require('react');
var NavLink = require('react-router-dom').NavLink;



function Nav ()

{

    return (

        <ul className = 'Nav'>
        
            <li>

                <NavLink exact activeClassName = 'active' to = '/'>
                
                Home
                
                
                </NavLink>
            </li>



            <li>

                <NavLink exact activeClassName = 'active' to = '/battle'>
                
                    Battle
                
                </NavLink>
            </li>


            <li>
                <NavLink exact activeClassName = 'active' to = '/popular'>
                
                    Popular 
                
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;