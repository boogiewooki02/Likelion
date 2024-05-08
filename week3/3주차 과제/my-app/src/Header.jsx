import './Header.css'
import logo from './images/logo.jpeg'
import bannerImage from './images/header-image.png'

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="logo">
          <img src={logo} alt='logo' style={{cursor: 'pointer'}}/>
        </div>
        <div className="navigation-bar">
          <ul>
            <li>중고거래</li>
            <li>동네업체</li>
            <li>알바</li>
            <li>부동산</li>
            <li>중고차 직거래</li>
          </ul>
        </div>
        <div className="search-bar">
          <input type='search' placeholder="물품이나 동네를 검색해보세요"></input>
          <button>채팅하기</button>
        </div>
      </div>
      <div className="header-banner">
        <div className='banner-contents'>
          <div className='carrotcarrot'>
            <h1 style={{margin: 0}}>우리 동네에서 찾는<br/>당근알바</h1>
            <p>걸어서 10분 거리의<br/>동네 알바들 여기 다 있어요.</p>
            <div style={{margin: '1.5rem 0 0'}}>
              <button type='button'>공고 올리기</button>
            </div>
          </div>
          <img src={bannerImage} alt='image' className='banner-image' />
        </div>
      </div>
    </div>
  )
}

export default Header;