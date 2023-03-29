import {Component} from 'react'

import HeaderPage from '../HeaderRoute'

import './index.css'

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="Home-header-page">
          <HeaderPage />
        </div>
        <div className="Home-Container">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679676916/Image_ghxnzr.png"
            className="Home-image-spider-man"
            alt="spider"
          />
          <div className="Home-spider-man-container">
            <h1 className="Home-spider-man-heading">Super Man</h1>
            <p className="Home-spider-man-Paragraph">
              Super Mam Is Fictional Super Hero Who First <br /> Appeared In
              American Comic Book Published By <br /> DC Comics
            </p>
            <button className="Home-button-play-button" type="button">
              Play
            </button>
          </div>
        </div>
        <div className="Did-card">
          <h1>Trending</h1>
        </div>
      </>
    )
  }
}

export default HomePage
