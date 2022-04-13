import { Breadcrumbs, Typography, Link } from '@mui/material';
import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation();
  const paths = location.pathname.split('/')
  const route = paths[paths.length - 1]
  const pageDescription = (route) => {
    switch (route) {
      case 'reserve':
        return 'Complete the steps to reserve.'
      case 'check':
        return 'Check if you have reserved.'
      case 'cancel':
        return 'Cancel your reservation'
      default:
        break;
    }
  }

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit">
          <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            Main
          </RouterLink>
        </Link>
        {route !== '' && <Typography color="text.primary">{pageDescription(route)}</Typography>}
      </Breadcrumbs>
    </div>
  )
}

export default Nav
