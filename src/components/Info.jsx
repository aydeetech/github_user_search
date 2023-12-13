import React from 'react'
import '../styles/info.css';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { BiGitRepoForked, BiRegistered } from "react-icons/bi";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {

    const {githubUser} = useGlobalContext()
    const {followers, following, public_repos} = githubUser
    const userInfo = [
        {
            id: 1,
            icon: <BiGitRepoForked className='icon' />,
            label: 'Repos',
            value: public_repos,
            color: "pink"
        },
        {
            id: 2,
            icon: <FiUsers className='icon' />,
            label: 'followers',
            value: followers,
            color: "green"
        },
        {
            id: 3,
            icon: <FiUserPlus className='icon' />,
            label: 'Following',
            value: following,
            color: "purple"
        }
    
]
  return (
    
    <section>
        <div className="section-center info-card">
            {
                userInfo.map((item) => {
                    const {id, color, icon, value , label} = item
                    return <article className='item' key={id}>
                        <span className= {color}>{icon}</span>

                        <div>
                            <h3>{value}</h3>
                            <p>{label}</p>
                        </div>
                    </article>
                })
            }
        </div>
    </section>
  )
}

export default Info