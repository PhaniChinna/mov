import {CgPlayListAdd} from 'react-icons/cg'
import {GoSearch} from 'react-icons/go'

import './index.css'

const HeaderPage = () => (
  <>
    <div className="Header-page-container">
      <div className="Header-page-list">
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679652587/Group_7399_2_x2dqea.png"
          className="Header-page-logo-image"
          alt="Movies"
        />
        <ul className="Un-ordered-list-container">
          <li className="List-Items-home-Heading">Home</li>
          <li className="List-Items-Popular-Heading">Popular</li>
        </ul>
      </div>
      <div className="Header-page-list-container">
        <GoSearch className="GoSearch" />
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679648297/Avatar_b1rb5n.png"
          className="Header-avatar"
          alt="avatar"
        />
        <CgPlayListAdd className="CgPlayer" />
      </div>
    </div>
  </>
)

export default HeaderPage
