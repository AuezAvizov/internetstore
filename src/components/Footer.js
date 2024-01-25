import React from 'react'
import { Route, Routes } from 'react-router-dom';

export default function Footer(){
    return(
       <footer>
        <div className='footer-content'>
            <div className='socailNetwork'>
            <a href="" title="Usec">
              <span class="icon-youtube"></span>
              <span class="visually-hidden">Youtube channel</span>
            <a href='' title=''/>
            </a>
            </div>
            <div className='rights'>
            &copy; 2023, United States Enrichment Corporation
            </div>

            <div className='Contacts'>
                support@enrichmentgroup.com
            </div>
        </div>
       </footer>
    )
}