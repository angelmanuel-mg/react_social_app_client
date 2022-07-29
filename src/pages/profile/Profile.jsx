import './profile.css'

import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src='assets/post/4.jpg' alt='' />
              <img className='profileUserImg' src='assets/person/3.jpg' alt='' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Angel Manuel</h4>
              <h4 className='profileInfoDesc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet reiciendis
              </h4>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
