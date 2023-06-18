/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react'
import { BuilderComponent, builder } from '@builder.io/react'
import { useCart } from '@lib/shopify/storefront-data-hooks'
import { jsx, Box, useThemeUI, Heading, Button } from 'theme-ui'
import { useUI } from '@components/common/context'
import Image from 'next/legacy/image'
import Searchbar from './Searchbar'
import Link from '@components/common/Link'
import { CiMenuBurger } from 'react-icons/ci'
import finesseLogo from '../../public/finesse-logo.png'

const Navbar: FC = () => {
  const [announcement, setAnnouncement] = useState()
  // const { theme } = useThemeUI()
  const { navigationLinks, logo, openSidebar } = useUI()
  const cart = useCart()

  useEffect(() => {
    async function fetchContent() {
      const items = cart?.lineItems || []
      const anouncementContent = await builder
        .get('announcement-bar', {
          cacheSeconds: 120,
          userAttributes: {
            itemInCart: items.map((item: any) => item.variant.product.handle),
          } as any,
        })
        .toPromise()
      setAnnouncement(anouncementContent)
    }
    fetchContent()
  }, [cart?.lineItems])

  return (
    <React.Fragment>
      <nav className="flex items-center justify-between p-4">
      </nav>
      <nav
        sx={{
          //   margin: `0 auto`,
          //   maxWidth: 1920,
          //   py: 2,
          //   px: 2,
          display: 'flex',
          //   justifyContent: 'space-between',
          //   alignItems: 'center',
          //   position: 'relative',
        }}
      >
        <div
        // sx={{
        //   transform: 'translateX(-50%)',
        //   left: '0%',
        //   position: 'absolute',
        // }}
        >
          <Link
            href="/"
          // sx={{
          //   letterSpacing: -1,
          //   textDecoration: `none`,
          //   paddingLeft: '5px',
          // }}
          >
            <Image
              alt="Logo"
              width={120}
              height={50}
              src={finesseLogo}
            ></Image>
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            minWidth: 140,
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <Searchbar />
          <Button onClick={openSidebar} aria-label="Cart">
            <CiMenuBurger />
          </Button>
          <Button onClick={openSidebar} aria-label="Cart">
            CART
          </Button>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
