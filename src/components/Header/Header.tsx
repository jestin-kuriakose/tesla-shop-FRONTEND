import React, { useState } from 'react'
import Logo from "../../assets/logo-full.png"
import "./Header.scss"
import { Link, NavLink, useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Header = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

    const hamburgerClass = hamburgerOpen ? "ts-header__hamburger-menu open" : "ts-header__hamburger-menu"

    const handleHamburgerClick = () => {
        setHamburgerOpen(prev => !prev)
        document.body.classList.toggle("noscroll")
    }

    const location = useLocation()
    const activeLink = location.pathname.split('/')[1]

  return (
    <div className="ts-header">
        <div className="ts-header__container container">
            <div className="ts-header__logo">
                <Link to={'/'}><img src={Logo} alt="Tesla Electronics" className="ts-header__logo__img" /></Link>
            </div>

            <div className={hamburgerOpen ? "ts-header__nav open" : "ts-header__nav"}>
                <ul className="ts-header__nav__pages">
                    <Link to={'/'}><li className={`ts-header__nav__page ${activeLink=== '' && "active"}`}>Home</li></Link>
                    <Link to={'/shop'}><li className={`ts-header__nav__page ${activeLink=== 'shop' && "active"}`}>Shop</li></Link>
                    <Link to={'/repair'}><li className={`ts-header__nav__page ${activeLink=== 'repair' && "active"}`}>Repair</li></Link>
                    <Link to={'/contact'}><li className={`ts-header__nav__page ${activeLink=== 'contact' && "active"}`}>Contact Us</li></Link>
                </ul>
                <ul className="ts-header__nav__auth">
                    <Link to={'/login'}><li className={`ts-header__nav__login ${activeLink=== 'login' && "active"}`}>Login</li></Link>
                    <Link to={'/register'}><li><button className="ts-header__nav__register btn-primary">Sign Up</button></li></Link>
                </ul>
            </div>

            <div className={hamburgerOpen ? 'ts-header__navend open' : 'ts-header__navend'}>
                <Link to={'/quote'} className='ts-header__quote'>
                    <p>Request a Quote</p><RequestQuoteIcon fontSize='large' />
                </Link>

                <Link to={'/cart'} className="ts-header__cartIcon">
                    <p>Cart</p>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="primary">
                            <ShoppingCartIcon fontSize='large' /> 
                        </StyledBadge>
                    </IconButton>
                </Link>
            </div>

            <div className={hamburgerClass} onClick={handleHamburgerClick}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    </div>
  )
}

export default Header